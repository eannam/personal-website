import CameraRaycaster from "@/components/camera-raycaster";
import MagicCube from "@/components/magic-cube";
import Message from "@/components/message";
import { autoRotateAtom } from "@/utils/atoms";
import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

export default function Home() {
  const autoRotate = useAtomValue(autoRotateAtom);

  return (
    <main className="h-screen bg-black ">
      <Canvas camera={{ position: [-3, 0.5, 3], fov: 80 }}>
        {/* <StatsGl /> */}
        <Suspense>
          <OrbitControls
            enablePan={false}
            enableRotate
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
          />
          <CameraRaycaster />
          <Message />
          <MagicCube />
        </Suspense>
      </Canvas>
      <Loader />
    </main>
  );
}
