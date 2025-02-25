import ClickableCube from "@/components/clickable-cube";
import LogoCube from "@/components/logo-cube";
import Side from "@/components/side";
import { cubePropsAtom } from "@/utils/atoms";
import { Edges } from "@react-three/drei";
import { useAtom } from "jotai";

export default function MagicCube() {
  const [cubeProps, setCubeProps] = useAtom(cubePropsAtom);

  const bg = "#000000";

  return (
    <mesh castShadow receiveShadow>
      <raycaster />
      <boxGeometry args={[2, 2, 2]} />
      <Edges color={"#ffffff"} />
      <Side rotation={[0, 0, 0]} bg={bg} index={0}>
        <LogoCube model="x-cube.glb" {...cubeProps.x} />
      </Side>
      <Side rotation={[0, Math.PI, 0]} bg={bg} index={1}>
        <LogoCube
          model="github-cube.glb"
          position={[0, -0.01, 0]}
          {...cubeProps.github}
        />
      </Side>
      <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg={bg} index={2}>
        <LogoCube
          model="substack-cube.glb"
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          {...cubeProps.substack}
        />
      </Side>
      <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg={bg} index={3}>
        <LogoCube
          model="info-cube.glb"
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          {...cubeProps.info}
        />
      </Side>
      <Side rotation={[0, -Math.PI / 2, 0]} bg={bg} index={4}>
        <LogoCube
          model="audyo-cube.glb"
          position={[0, -0.01, 0]}
          {...cubeProps.audyo}
        />
      </Side>
      <Side rotation={[0, Math.PI / 2, 0]} bg={bg} index={5}>
        <LogoCube
          model="linkedin-cube.glb"
          position={[0, 0.035, 0]}
          {...cubeProps.linkedin}
        />
      </Side>
      <ClickableCube cubeProps={cubeProps} setCubeProps={setCubeProps} />
    </mesh>
  );
}
