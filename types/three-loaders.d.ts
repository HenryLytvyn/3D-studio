declare module 'three';

declare module 'three/examples/jsm/loaders/STLLoader.js' {
  import { Loader } from 'three';
  import { BufferGeometry } from 'three';

  export class STLLoader extends Loader {
    load(
      url: string,
      onLoad: (geometry: BufferGeometry) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module 'three/examples/jsm/loaders/OBJLoader.js' {
  import { Loader, Object3D } from 'three';

  export class OBJLoader extends Loader {
    load(
      url: string,
      onLoad: (object: Object3D) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
  import { Loader, Object3D } from 'three';

  export interface GLTF {
    scene: Object3D;
  }

  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
