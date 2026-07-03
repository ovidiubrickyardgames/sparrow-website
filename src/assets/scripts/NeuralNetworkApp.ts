import * as THREE from 'three';

export class NeuralNetwork {
  private canvas: HTMLCanvasElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private group!: THREE.Group;
  private clock!: THREE.Clock;
  private nodes!: THREE.Mesh[];
  private linePositions!: THREE.Mesh[];
  private lines!: THREE.LineSegments;
  private lineGeometry!: THREE.BufferGeometry;
  private animationId: number | null = null;
  private resizeObserver!: ResizeObserver;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private lastWidth: number = 0;
  private lastHeight: number = 0;
  private lastTouchX: number | null = null;
  private lastTouchY: number | null = null;
  // Pre-allocated reusable Vector3 to avoid per-frame GC pressure
  private _scaleVec: THREE.Vector3 = new THREE.Vector3();
  // Timer for surge effect — avoids Math.random() per node per frame
  private _nextSurgeTime: number = 0;

  // --- 3D UI Cards Properties ---
  private raycaster!: THREE.Raycaster;
  private mouseVector!: THREE.Vector2;
  private cards!: THREE.Mesh[];
  private hoveredCard: THREE.Mesh | null = null;
  private lineMaterial!: THREE.LineBasicMaterial;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;

    // Prevent multiple initializations on the same canvas
    if (this.canvas.dataset.initialized === 'true') {
      return;
    }
    this.canvas.dataset.initialized = 'true';

    this.init();

    document.addEventListener('astro:before-swap', () => {
      this.dispose();
    }, { once: true });
  }

  init() {
    this.scene = new THREE.Scene();
    this.raycaster = new THREE.Raycaster();
    this.mouseVector = new THREE.Vector2(-1000, -1000);
    this.cards = [];

    const parent = this.canvas.parentElement;
    const width = parent ? parent.clientWidth : this.canvas.clientWidth || 300;
    const height = parent
      ? parent.clientHeight
      : this.canvas.clientHeight || 150;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 20;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });

    const initialWidth = width || 300;
    const initialHeight = height || 150;

    this.renderer.setSize(initialWidth, initialHeight, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // No postprocessing pipeline — bloom glow is achieved via CSS mix-blend-mode: screen on the canvas parent.
    // This avoids expensive WebGL shader compilation long tasks on the main thread during load.

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.createNetwork();

    this.clock = new THREE.Clock();

    // Handle Resize optimally
    this.resizeObserver = new ResizeObserver(() => this.onWindowResize());
    this.resizeObserver.observe(this.canvas.parentElement!);

    // Mouse and Touch tracking
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('touchstart', this.onTouchStart, { passive: true });
    window.addEventListener('touchmove', this.onTouchMove, { passive: true });
    window.addEventListener('touchend', this.onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', this.onTouchEnd, { passive: true });

    // Force initial resize computation to set the right-side anchoring
    this.onWindowResize();

    // Start animation loop
    this.animate();
  }

  onMouseMove = (event: MouseEvent) => {
    // Rotation logic coordinates
    this.targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.targetMouseY = (event.clientY / window.innerHeight) * 2 - 1;

    // Raycaster logic coordinates (relative to canvas)
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (this.mouseVector) {
      this.mouseVector.x = (x / rect.width) * 2 - 1;
      this.mouseVector.y = -(y / rect.height) * 2 + 1;
    }
  };

  onTouchStart = (event: TouchEvent) => {
    if (event.touches.length > 0) {
      this.lastTouchX = event.touches[0].clientX;
      this.lastTouchY = event.touches[0].clientY;
    }
  };

  onTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0];

      if (this.lastTouchX !== null && this.lastTouchY !== null) {
        const dx = (touch.clientX - this.lastTouchX) / window.innerWidth;
        const dy = (touch.clientY - this.lastTouchY) / window.innerHeight;

        // Sensitivity multiplier for smooth rotation
        this.targetMouseX += dx * 2.5;
        this.targetMouseY += dy * 2.5;
      }

      this.lastTouchX = touch.clientX;
      this.lastTouchY = touch.clientY;

      // Raycaster logic coordinates (relative to canvas) remains absolute
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      if (this.mouseVector) {
        this.mouseVector.x = (x / rect.width) * 2 - 1;
        this.mouseVector.y = -(y / rect.height) * 2 + 1;
      }
    }
  };

  onTouchEnd = () => {
    this.lastTouchX = null;
    this.lastTouchY = null;
  };

  createNetwork() {
    const nodeCount = 50;
    const maxDistance = 4.0;
    this.nodes = [];

    // Create Nodes
    const geometry = new THREE.SphereGeometry(0.06, 16, 16);

    const cyanMaterial = new THREE.MeshBasicMaterial({ color: 0x00d8ff });
    const purpleMaterial = new THREE.MeshBasicMaterial({ color: 0xbb86fc });
    const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff2a9d });

    const materials = [
      cyanMaterial,
      cyanMaterial,
      purpleMaterial,
      pinkMaterial,
    ];

    for (let i = 0; i < nodeCount; i++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const sphere = new THREE.Mesh(geometry, material);

      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.pow(Math.random(), 0.5) * 7.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      sphere.position.set(x, y, z);
      sphere.userData = {
        basePosition: new THREE.Vector3(x, y, z),
        speed: Math.random() * 0.4 + 0.1,
        offset: Math.random() * Math.PI * 2,
      };

      this.group.add(sphere);
      this.nodes.push(sphere);
    }

    // --- UI Cards Setup with Images ---
    const textureLoader = new THREE.TextureLoader();
    [
      { type: 'tech-blueprint', node: 5 },
      { type: 'code-terminal', node: 25 },
      { type: 'digital-europe-map', node: 45 }
    ].forEach(data => {
      const anchorNode = this.nodes[data.node];
      if (!anchorNode) return;

      // Initialize with default square geometry; will be updated in texture callback
      const geometry = new THREE.PlaneGeometry(1.8, 1.8);
      const material = new THREE.MeshBasicMaterial({
        color: 0xa1a1a1,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
        depthWrite: false,
        opacity: 0.8,
      });

      const card = new THREE.Mesh(geometry, material);

      card.userData = {
        anchor: anchorNode,
        baseScale: 1.5,
        hoverScale: 1.6,
      };

      const texture = textureLoader.load(
        `/images/neural-network/${data.type}.webp`,
        tex => {
          // Update aspect ratio once texture is loaded
          const aspect = tex.image.width / tex.image.height;
          let width = 1.8;
          let height = 1.8;

          // Maintain a maximum dimension of 1.8 while preserving aspect ratio
          if (aspect > 1) {
            height = 1.8 / aspect;
          } else {
            width = 1.8 * aspect;
          }

          card.geometry.dispose();
          card.geometry = new THREE.PlaneGeometry(width, height);
          
          material.map = tex;
          material.needsUpdate = true;
        }
      );

      if ('SRGBColorSpace' in THREE) {
        texture.colorSpace = (THREE as any).SRGBColorSpace;
      }

      this.group.add(card);
      this.cards.push(card);
    });
    // Create Connections (Lines)
    this.lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9f7aea, // Subtle purple line base
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    this.linePositions = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = this.nodes[i].position.distanceTo(this.nodes[j].position);
        if (dist < maxDistance) {
          this.linePositions.push(this.nodes[i], this.nodes[j]);
        }
      }
    }

    this.lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.linePositions.length * 3);
    this.lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    this.lines = new THREE.LineSegments(this.lineGeometry, this.lineMaterial);
    this.group.add(this.lines);
  }

  updateLines() {
    if (!this.lines || !this.linePositions) return;

    const positions = this.lines.geometry.attributes.position
      .array as Float32Array;
    let i = 0;

    for (let k = 0; k < this.linePositions.length; k += 2) {
      const nodeA = this.linePositions[k];
      const nodeB = this.linePositions[k + 1];

      let posAX = nodeA.position.x;
      let posAY = nodeA.position.y;
      let posAZ = nodeA.position.z;

      let posBX = nodeB.position.x;
      let posBY = nodeB.position.y;
      let posBZ = nodeB.position.z;

      // "Data Feed" Effect: snap lines to hovered card
      if (this.hoveredCard) {
        const anchor = this.hoveredCard.userData.anchor;

        // Check if this line connects to the anchor or is very close
        if (
          nodeA === anchor ||
          nodeB === anchor ||
          nodeA.position.distanceTo(anchor.position) < 2.5 ||
          nodeB.position.distanceTo(anchor.position) < 2.5
        ) {
          const cardPos = this.hoveredCard.position;
          // Create an edge offset based on vertex index for visual spread
          const edgeOffsetX = ((k % 3) - 1) * 0.7;
          const edgeOffsetY = ((k % 5) - 2) * 0.3;

          // Lerp vertices towards the card edges
          posAX += (cardPos.x + edgeOffsetX - posAX) * 0.3;
          posAY += (cardPos.y + edgeOffsetY - posAY) * 0.3;
          posAZ += (cardPos.z - posAZ) * 0.3;

          posBX += (cardPos.x - edgeOffsetX - posBX) * 0.3;
          posBY += (cardPos.y - edgeOffsetY - posBY) * 0.3;
          posBZ += (cardPos.z - posBZ) * 0.3;
        }
      }

      positions[i++] = posAX;
      positions[i++] = posAY;
      positions[i++] = posAZ;

      positions[i++] = posBX;
      positions[i++] = posBY;
      positions[i++] = posBZ;
    }

    this.lines.geometry.attributes.position.needsUpdate = true;
  }

  animate = () => {
    // Allow stopping animation if component unmounts
    if (!document.body.contains(this.canvas)) {
      this.dispose();
      return;
    }

    this.animationId = requestAnimationFrame(this.animate);

    const time = this.clock.getElapsedTime();

    // Smooth mouse interpolation
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // Combine auto-rotation with mouse rotation
    // Using mouseX for Y-axis rotation and mouseY for X-axis rotation
    this.group.rotation.y = time * 0.1 + this.mouseX * 0.5;
    this.group.rotation.x = time * 0.05 + this.mouseY * 0.3;

    // Update Raycaster for hover states (Disabled to prevent line breaking bugs)
    // this.raycaster.setFromCamera(this.mouseVector, this.camera);
    // const intersects = this.raycaster.intersectObjects(this.cards, false);
    this.hoveredCard = null;

    // Make lines pop when hovering over UI cards
    if (this.lineMaterial) {
      this.lineMaterial.opacity = this.hoveredCard ? 0.5 : 0.2;
    }

    // Update Cards — use pre-allocated _scaleVec to avoid per-frame GC pressure
    this.cards.forEach(card => {
      const anchor = card.userData.anchor;

      // Float anchored slightly in front of the target node
      card.position.copy(anchor.position);
      card.position.z += 0.8;

      // Billboarding: make cards always face the camera
      card.lookAt(this.camera.position);

      // Smooth scaling for hover state
      const targetScale =
        card === this.hoveredCard
          ? card.userData.hoverScale
          : card.userData.baseScale;
      this._scaleVec.set(targetScale, targetScale, targetScale);
      card.scale.lerp(this._scaleVec, 0.1);

      // Stable visibility (pulsing removed)
      if (card.material instanceof THREE.MeshBasicMaterial) {
        const targetOpacity = card === this.hoveredCard ? 0.9 : 0.8;
        card.material.opacity += (targetOpacity - card.material.opacity) * 0.1;
      }
    });

    // Trigger a surge on one random node periodically instead of checking Math.random() per node per frame
    if (time > this._nextSurgeTime) {
      const randomNodeIdx = Math.floor(Math.random() * this.nodes.length);
      const surgeNode = this.nodes[randomNodeIdx];
      if (surgeNode && !surgeNode.userData.isSurging) {
        surgeNode.userData.isSurging = true;
        surgeNode.userData.surgeStartTime = time;
      }
      // Schedule next surge in 0.5–2 seconds
      this._nextSurgeTime = time + 0.5 + Math.random() * 1.5;
    }

    // Pulse and drift individual nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const { basePosition, speed, offset } = node.userData;

      // Small organic drift
      node.position.x = basePosition.x + Math.sin(time * speed + offset) * 0.3;
      node.position.y = basePosition.y + Math.cos(time * speed + offset) * 0.3;
      node.position.z =
        basePosition.z + Math.sin(time * speed * 0.8 + offset) * 0.3;

      let surgeScale = 1;
      if (node.userData.isSurging) {
        const elapsed = time - node.userData.surgeStartTime;
        const duration = 1.0;
        if (elapsed < duration) {
          surgeScale = 1 + Math.sin((elapsed / duration) * Math.PI) * 2.5;
        } else {
          node.userData.isSurging = false;
        }
      }

      const baseScale = 1 + Math.sin(time * speed * 3 + offset) * 0.2;
      const finalScale = baseScale * surgeScale;
      node.scale.set(finalScale, finalScale, finalScale);
    }

    this.updateLines();

    // Render scene directly — no postprocessing
    this.renderer.render(this.scene, this.camera);
  };

  onWindowResize() {
    if (!this.canvas || !this.canvas.parentElement) return;

    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight;

    // Prevent flicker on mobile when scrolling (address bar hides/shows changing height slightly)
    if (
      this.lastWidth === width &&
      Math.abs(this.lastHeight - height) < 150 &&
      this.lastWidth !== 0
    ) {
      return;
    }

    this.lastWidth = width;
    this.lastHeight = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height, false);

    // Dynamically calculate the visible width at z=0 to anchor the network to the right side
    // This allows the canvas to be full-screen (preventing any CSS clipping margins)
    // while visually positioning the 3D object in the right-hand column layout.
    const vFov = (this.camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(vFov / 2) * this.camera.position.z;
    const visibleWidth = visibleHeight * this.camera.aspect;

    // Shift the network 40% towards the right edge of the screen
    this.group.position.x = (visibleWidth / 2) * 0.4;
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('touchcancel', this.onTouchEnd);

    // Memory cleanup
    this.scene.clear();
    this.renderer.dispose();
  }
}
