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
      <Environment preset="city" />
      {/* @ts-ignore */}
      <mesh rotation={rotation} geometry={child.geometry} receiveShadow>
        <meshStandardMaterial color={bg} metalness={0.9} roughness={0.6} />
      </mesh>
      {children}
    </MeshPortalMaterial>
  );
}
