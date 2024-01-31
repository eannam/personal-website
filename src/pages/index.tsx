import MagicCube from "@/components/magic-cube";
import Message from "@/components/message";
import { autoRotateAtom, messageAtom } from "@/utils/atoms";
import { Loader, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

export default function Home() {
  const message = useAtomValue(messageAtom);
  const autoRotate = useAtomValue(autoRotateAtom);

  return (
    <main className="h-screen to-black from-slate-800 bg-gradient-radial ">
      <Canvas camera={{ position: [-3, 0.5, 3], fov: 80 }}>
        <PerformanceMonitor>
          <Suspense>
            <OrbitControls
              enablePan={false}
              enableRotate
              autoRotate={autoRotate}
              autoRotateSpeed={1}
            />
            <Message />
            <MagicCube />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      <Loader />
    </main>
  );
}
