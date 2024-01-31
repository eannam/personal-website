import { autoRotateAtom } from "@/utils/atoms";
import { Sparkles, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

export default function Earth({
  scale,
  lightIntensity,
}: {
  scale: number;
  lightIntensity: number;
}) {
  const { scene } = useGLTF("/models/earth.glb");

  const rotate = useAtomValue(autoRotateAtom);

  useFrame((state, delta) => {
    if (rotate && scene) {
      scene.rotation.y += delta;
    }
  });

  return (
    <Suspense>
      <mesh scale={[scale, scale, scale]} position={[0, 0.5, 0]}>
        <primitive object={scene} />
      </mesh>
      <ambientLight intensity={1} />
      <pointLight position={[0, 1.5, 0]} intensity={lightIntensity} />
      <Sparkles
        count={50}
        scale={2}
        size={0.5}
        speed={0.1}
        position={[0, 0, 0]}
      />
    </Suspense>
  );
}
