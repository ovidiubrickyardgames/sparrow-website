/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'three/examples/jsm/postprocessing/EffectComposer.js' {
  export class EffectComposer {
    constructor(renderer: any, renderTarget?: any);
    addPass(pass: any): void;
    render(delta?: number): void;
    setSize(width: number, height: number): void;
    dispose(): void;
  }
}

declare module 'three/examples/jsm/postprocessing/RenderPass.js' {
  export class RenderPass {
    constructor(scene: any, camera: any);
  }
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass.js' {
  export class UnrealBloomPass {
    constructor(
      resolution: any,
      strength: number,
      radius: number,
      threshold: number
    );
  }
}

declare module 'three/examples/jsm/postprocessing/ShaderPass.js' {
  export class ShaderPass {
    constructor(shader: any, textureID?: string);
  }
}
