import Ireland from "@/components/ireland";
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function IrelandPage() {
  return (
    <main className="h-screen bg-gradient-radial to-black from-slate-800">
      <Canvas camera={{ position: [-3, 0.5, 3], fov: 50 }}>
        <Suspense>
          <OrbitControls autoRotate />
          <Stage preset="soft" environment="city" adjustCamera={false}>
            <Ireland />
          </Stage>
        </Suspense>
      </Canvas>
      <Loader />
    </main>
  );
}
