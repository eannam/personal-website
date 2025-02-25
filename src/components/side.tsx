import {
  Edges,
  Environment,
  MeshPortalMaterial,
  useGLTF,
} from "@react-three/drei";
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
      <mesh rotation={rotation} geometry={child.geometry}>
        <Edges
          color="#ffffff"
          threshold={15} // Adjust angle threshold as needed
          scale={0.999}
          renderOrder={1} // Ensure edges render on top
        />
        <meshBasicMaterial color={bg} />
      </mesh>
      {children}
    </MeshPortalMaterial>
  );
}
