import MagicCube from "@/components/magic-cube";
import { autoRotateAtom, textAtom } from "@/utils/atoms";
import { Billboard, Loader, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

export default function Home() {
  const text = useAtomValue(textAtom);
  const autoRotate = useAtomValue(autoRotateAtom);

  return (
    <main className="h-screen">
      <Canvas shadows camera={{ position: [-3, 0.5, 3], fov: 70 }}>
        <color attach="background" args={["black"]} />
        <OrbitControls
          enablePan={false}
          enableRotate
          autoRotate={autoRotate}
          autoRotateSpeed={1}
        />

        <ambientLight intensity={0.5} />

        <Suspense>
          <Billboard>
            <Text
              position={[0, 2.5, 0]}
              fontSize={0.2}
              font="/fonts/BerkeleyMono-Regular.ttf"
            >
              {text}
              <meshBasicMaterial color="white" toneMapped={false} />
            </Text>
          </Billboard>
          <MagicCube />
        </Suspense>
      </Canvas>
      <Loader />
    </main>
  );
}
