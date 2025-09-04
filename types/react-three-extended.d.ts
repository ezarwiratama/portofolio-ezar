import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { ThreeElements } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElements["bufferGeometry"] & {
      args?: ConstructorParameters<typeof MeshLineGeometry>;
    };
    meshLineMaterial: ThreeElements["material"] & {
      args?: ConstructorParameters<typeof MeshLineMaterial>;
      color?: string;
      lineWidth?: number;
      map?: THREE.Texture;
      useMap?: boolean;
      repeat?: [number, number];
      resolution?: [number, number];
    };
  }
}
