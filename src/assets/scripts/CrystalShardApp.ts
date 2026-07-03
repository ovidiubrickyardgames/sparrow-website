import * as THREE from 'three';

export class CrystalShardApp {
  private canvas: HTMLCanvasElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private group!: THREE.Group;
  private clock!: THREE.Clock;
  private particles!: THREE.Points;
  private particleGeometry!: THREE.BufferGeometry;
  private particleMaterial!: THREE.PointsMaterial;
  private animationId: number | null = null;
  private resizeObserver!: ResizeObserver;

  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;

  private lastWidth: number = 0;
  private lastHeight: number = 0;
  private scrollPercent: number = 0;
  private targetScrollPercent: number = 0;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;

    if (this.canvas.dataset.initialized === 'true') {
      return;
    }
    this.canvas.dataset.initialized = 'true';

    this.init();

    document.addEventListener('astro:before-swap', () => {
      this.dispose();
    }, { once: true });
  }

  private createCircleTexture(isLightTheme: boolean): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Soft radial gradient for a beautiful glowing star/nebula particle look
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      if (isLightTheme) {
        // High-contrast radial gradient with neutral center and soft dark edges for light backgrounds
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(240, 240, 240, 0.8)');
        gradient.addColorStop(0.5, 'rgba(200, 200, 200, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 240, 220, 0.8)');
        gradient.addColorStop(0.5, 'rgba(187, 134, 252, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  private init() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    const parent = this.canvas.parentElement;
    const width = parent ? parent.clientWidth : this.canvas.clientWidth || 300;
    const height = parent ? parent.clientHeight : this.canvas.clientHeight || 150;

    // Camera setup (wider view)
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 15;

    // WebGL Renderer with Alpha support for transparency
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Base Group to contain the elements
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Create the particle galaxy nebula
    this.createParticleNebula();

    // Event Listeners
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('scroll', this.onScroll, { passive: true });

    // Handle Resize
    this.resizeObserver = new ResizeObserver(() => this.onWindowResize());
    if (this.canvas.parentElement) {
      this.resizeObserver.observe(this.canvas.parentElement);
    }

    this.onWindowResize();
    this.animate();
  }

  private createParticleNebula() {
    const particleCount = 1200;
    this.particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Detect light theme wrapper
    const isLightTheme = this.canvas.closest('.bg-white') !== null;

    // Premium color theme palettes adjusted for light vs dark backgrounds
    const colorViolet = isLightTheme ? new THREE.Color(0x7c3aed) : new THREE.Color(0xa78bfa); // violet-600 vs violet-300
    const colorGold = isLightTheme ? new THREE.Color(0xd97706) : new THREE.Color(0xf59e0b); // amber-600 vs amber-500
    const colorSilver = isLightTheme ? new THREE.Color(0x4b5563) : new THREE.Color(0xe2e8f0); // gray-600 vs slate-200
    const colorIndigo = isLightTheme ? new THREE.Color(0x4f46e5) : new THREE.Color(0x6366f1); // indigo-600 vs indigo-500

    const initialData: Array<{
      basePos: THREE.Vector3;
      angle: number;
      speed: number;
      radius: number;
      phase: number;
      armIndex: number;
    }> = [];

    // Distribute particles in 3 spiral arms representing outreach pipeline flow
    for (let i = 0; i < particleCount; i++) {
      const armIndex = i % 3;
      const armAngle = (armIndex * 2 * Math.PI) / 3;

      // Random radius distribution with dense core and sparse outer bounds
      const u = Math.random();
      const radius = 1.0 + Math.pow(u, 2) * 6.5;

      // Spiral swirl calculations
      const swirlFactor = 1.8;
      const angle = armAngle + radius * swirlFactor + (Math.random() - 0.5) * 0.45;

      // Organic dispersion vertically
      const heightOffset = (Math.random() - 0.5) * 1.5 * (1.0 - radius / 8.0);
      
      const x = Math.cos(angle) * radius;
      const y = heightOffset;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Dynamic color interpolation
      let finalColor = colorViolet.clone();
      const mixRatio = radius / 7.5;
      
      if (mixRatio < 0.3) {
        // Core is rich violet & indigo
        finalColor.lerp(colorIndigo, mixRatio * 3.33);
      } else if (mixRatio < 0.75) {
        // Inner arms are violet & gold
        finalColor.lerp(colorGold, (mixRatio - 0.3) * 2.22);
      } else {
        // Outer arms fade to silver/slate
        finalColor = colorGold.clone().lerp(colorSilver, (mixRatio - 0.75) * 4.0);
      }

      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;

      initialData.push({
        basePos: new THREE.Vector3(x, y, z),
        angle,
        speed: 0.12 + Math.random() * 0.28,
        radius,
        phase: Math.random() * Math.PI * 2,
        armIndex
      });
    }

    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Save initial attributes for animation frame computations
    this.particleGeometry.userData = { initialData };

    // Points Material using custom circular texture
    this.particleMaterial = new THREE.PointsMaterial({
      size: isLightTheme ? 0.28 : 0.32,
      vertexColors: true,
      transparent: true,
      opacity: isLightTheme ? 0.75 : 0.85,
      blending: isLightTheme ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
      map: this.createCircleTexture(isLightTheme),
    });

    this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.group.add(this.particles);
  }

  private onMouseMove = (event: MouseEvent) => {
    this.targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.targetMouseY = (event.clientY / window.innerHeight) * 2 - 1;
  };

  private onScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      this.targetScrollPercent = window.scrollY / docHeight;
    }
  };

  private animate = () => {
    if (!document.body.contains(this.canvas)) {
      this.dispose();
      return;
    }

    this.animationId = requestAnimationFrame(this.animate);
    const time = this.clock.getElapsedTime();

    // Lerp values for interactive responsiveness
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.04;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.04;
    this.scrollPercent += (this.targetScrollPercent - this.scrollPercent) * 0.06;

    // Gentle global rotation
    this.group.rotation.y = time * 0.05 + this.scrollPercent * 1.5 + this.mouseX * 0.15;
    this.group.rotation.x = time * 0.02 + this.mouseY * 0.08;

    // Update each particle coordinate dynamically
    const positions = this.particleGeometry.attributes.position.array as Float32Array;
    const initialData = this.particleGeometry.userData.initialData;

    for (let i = 0; i < initialData.length; i++) {
      const data = initialData[i];
      
      // Wave turbulence calculation
      const wave = Math.sin(time * data.speed + data.phase) * 0.12;
      const swirl = Math.cos(time * 0.05 + data.phase) * 0.05;

      // Expand the galaxy as user scrolls down
      const expansion = 1.0 + this.scrollPercent * 0.35;
      
      // Compute rotated spiral arm coordinates
      const currentAngle = data.angle + wave * 0.3 + this.scrollPercent * 0.8;
      const currentRadius = data.radius * expansion + swirl;

      positions[i * 3] = Math.cos(currentAngle) * currentRadius;
      positions[i * 3 + 1] = data.basePos.y + wave * 0.4;
      positions[i * 3 + 2] = Math.sin(currentAngle) * currentRadius;
    }

    this.particleGeometry.attributes.position.needsUpdate = true;

    // Render frame
    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize() {
    if (!this.canvas || !this.canvas.parentElement) return;

    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight;

    if (
      this.lastWidth === width &&
      Math.abs(this.lastHeight - height) < 100 &&
      this.lastWidth !== 0
    ) {
      return;
    }

    this.lastWidth = width;
    this.lastHeight = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height, false);

    // Position group to overlap the right-hand column on desktop
    const vFov = (this.camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(vFov / 2) * this.camera.position.z;
    const visibleWidth = visibleHeight * this.camera.aspect;

    if (window.innerWidth >= 1024) {
      this.group.position.x = (visibleWidth / 2) * 0.35;
      this.group.position.y = 0.5;
    } else {
      this.group.position.x = 0;
      this.group.position.y = -0.5;
    }
  }

  public dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('scroll', this.onScroll);

    this.scene.clear();
    this.renderer.dispose();
  }
}
