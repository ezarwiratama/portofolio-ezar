import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { ThreeElements } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElements["bufferGeometry"] & {
      attach?: string;
    };
    meshLineMaterial: ThreeElements["material"] & {
      attach?: string;
      color?: string | number;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
      lineWidth?: number;
    };
  }
}
