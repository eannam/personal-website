import { DEFAULT_MESSAGE, textAtom } from "@/utils/atoms";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSetAtom } from "jotai";

export default function Earth() {
  const { scene } = useGLTF("/models/earth.glb");

  const setText = useSetAtom(textAtom);

  useFrame((state, delta) => {
    if (scene) {
      scene.rotation.y += delta;
    }
  });

  return (
    <>
      <mesh
        scale={[0.001, 0.001, 0.001]}
        position={[0, 0.5, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setText("I'm from Ireland\nbut I live in London.");
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setText(DEFAULT_MESSAGE);
        }}
      >
        <primitive object={scene} />
      </mesh>
      <ambientLight intensity={1} />
      <pointLight position={[0.9, 0.7, 0]} intensity={5} />
    </>
  );
}
