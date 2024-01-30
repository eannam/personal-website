import { autoRotateAtom } from "@/utils/atoms";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { Suspense, useRef } from "react";
import * as THREE from "three";

type Model =
  | "audyo-cube.glb"
  | "x-cube.glb"
  | "linkedin-cube.glb"
  | "github-cube.glb"
  | "info-cube.glb";

export default function LogoCube({
  model,
  color,
  scale = 0.02,
  lightIntensity = 20,
  position = [0, 0, 0],
  rotation,
}: {
  model: Model;
  color: string;
  scale?: number;
  lightIntensity?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const rotate = useAtomValue(autoRotateAtom);
  const mesh = useRef<THREE.Mesh>(null);

  const { scene } = useGLTF(`/models/cubes/${model}`);

  useFrame((state, delta) => {
    if (rotate && mesh.current) {
      mesh.current.rotation.y += delta;
    }
  });

  for (const child of scene.children) {
    if (child.type === "Mesh") {
      // @ts-ignore
      child.material = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.2,
        metalness: 0.7,
      });
    }
  }

  return (
    <Suspense>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        scale={[scale, scale, scale]}
        position={position}
        rotation={rotation}
      >
        <primitive object={scene} />
        <pointLight position={position} intensity={lightIntensity} castShadow />
      </mesh>
    </Suspense>
  );
}
