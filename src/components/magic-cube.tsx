import ClickableCube from "@/components/clickable-cube";
import { CubeProps } from "@/components/clickable-facade";
import Earth from "@/components/earth";
import LogoCube from "@/components/logo-cube";
import Side from "@/components/side";
import { Edges } from "@react-three/drei";
import { useState } from "react";

export default function MagicCube() {
  const [cubeProps, setCubeProps] = useState<CubeProps>({
    x: {
      scale: 0.02,
      lightIntensity: 20,
      color: "#36454f",
      message: "I'm on X",
    },
    github: {
      scale: 0.02,
      lightIntensity: 20,
      color: "#6cc644",
      message: "Check out my GitHub",
    },
    audyo: {
      scale: 0.02,
      lightIntensity: 20,
      color: "#ec4f27",
      message: "I'm cofounder & CTO at Audyo",
    },
    linkedin: {
      scale: 0.02,
      lightIntensity: 20,
      color: "#0077b5",
      message: "I'm on LinkedIn",
    },
    info: {
      scale: 0.02,
      lightIntensity: 20,
      color: "#ffd700",
      message: "More about me",
    },
    earth: {
      scale: 0.001,
      lightIntensity: 5,
      message: "I'm from Dublin, Ireland,\nliving in London.",
      color: "",
    },
  });

  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <Edges />
      <Side rotation={[0, 0, 0]} bg="black" index={0}>
        <LogoCube model="x-cube.glb" {...cubeProps.x} />
      </Side>
      <Side rotation={[0, Math.PI, 0]} bg="#6cc644" index={1}>
        <LogoCube
          model="github-cube.glb"
          position={[0, -0.01, 0]}
          {...cubeProps.github}
        />
      </Side>
      <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="black" index={2}>
        <Earth {...cubeProps.earth} />
      </Side>
      <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="#ffd700" index={3}>
        <LogoCube
          model="info-cube.glb"
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          {...cubeProps.info}
        />
      </Side>
      <Side rotation={[0, -Math.PI / 2, 0]} bg="#ec4f27" index={4}>
        <LogoCube
          model="audyo-cube.glb"
          position={[0, -0.01, 0]}
          {...cubeProps.audyo}
        />
      </Side>
      <Side rotation={[0, Math.PI / 2, 0]} bg="#0077b5" index={5}>
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
