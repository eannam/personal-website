import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const scale = 0.02;

export default function Ireland() {
  const { scene } = useGLTF("/models/ireland.glb");

  for (const child of scene.children) {
    if (child.type === "Mesh") {
      // @ts-ignore
      child.material = new THREE.MeshStandardMaterial({
        color: "#10b981",
        roughness: 0.3,
        metalness: 0.9,
      });
    }
  }

  return (
    <Suspense>
      <mesh
        scale={[scale, scale, scale]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <primitive object={scene} />
      </mesh>
    </Suspense>
  );
}
