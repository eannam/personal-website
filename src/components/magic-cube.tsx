import ClickableFacade from "@/components/clickable-facade";
import Earth from "@/components/earth";
import LogoCube from "@/components/logo-cube";
import Side from "@/components/side";
import { autoRotateAtom } from "@/utils/atoms";
import { Edges } from "@react-three/drei";
import { useSetAtom } from "jotai";
import { useState } from "react";

export default function MagicCube() {
  const setRotation = useSetAtom(autoRotateAtom);

  const [cubeProps, setCubeProps] = useState({
    x: { scale: 0.02, lightIntensity: 20, color: "#36454f" },
    github: { scale: 0.02, lightIntensity: 20, color: "#6cc644" },
    audyo: { scale: 0.02, lightIntensity: 20, color: "#ec4f27" },
    linkedin: { scale: 0.02, lightIntensity: 20, color: "#0077b5" },
    info: { scale: 0.02, lightIntensity: 20, color: "#ffd700" },
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
        <Earth />
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
      <ClickableFacade
        position={[0, 0, 1.0001]}
        rotation={[0, 0, 0]}
        url="https://audyo.ai"
        stateKey="audyo"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <mesh receiveShadow>
        <boxGeometry args={[0, 0, 4]} />
        <meshStandardMaterial color="black" metalness={0.2} roughness={0.7} />
      </mesh>
      <ClickableFacade
        position={[0, 0, -1.0001]}
        rotation={[0, Math.PI, 0]}
        url="https://linkedin.com/in/eannamorley"
        stateKey="linkedin"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[1.0001, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        url="https://x.com/_eannamorley"
        stateKey="x"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[-1.0001, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        url="https://github.com/eannam"
        stateKey="github"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[0, -1.0001, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        url={null}
        stateKey="info"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
    </mesh>
  );
}
