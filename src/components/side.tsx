import { Environment, MeshPortalMaterial, useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function Side({
  rotation = [0, 0, 0],
  bg = "#f0f0f0",
  children,
  index,
}: {
  rotation?: [number, number, number];
  bg?: string;
  children: any;
  index: number;
}) {
  const { scene } = useGLTF("/models/aobox-transformed.glb");
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const child = copiedScene.children[0];

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* @ts-ignore */}
      <mesh rotation={rotation} geometry={child.geometry} receiveShadow>
        <meshStandardMaterial color={bg} />
        <ambientLight intensity={0.2} />
      </mesh>
      {children}
    </MeshPortalMaterial>
  );
}
