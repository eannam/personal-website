import ClickableFacade, { CubeProps } from "@/components/clickable-facade";

export default function ClickableCube({
  cubeProps,
  setCubeProps,
}: {
  cubeProps: CubeProps;
  setCubeProps: any;
}) {
  return (
    <>
      <ClickableFacade
        position={[0, 0, -1.0001]}
        rotation={[0, Math.PI, 0]}
        url="https://linkedin.com/in/eannamorley"
        variant="linkedin"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[1.0001, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        url="https://x.com/_eannamorley"
        variant="x"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[-1.0001, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        url="https://github.com/eannam"
        variant="github"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[0, -1.0001, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        url={"https://eannamorley.com/about"}
        variant="info"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[0, 0, 1.0001]}
        rotation={[0, 0, 0]}
        url="https://audyo.ai"
        variant="audyo"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
      <ClickableFacade
        position={[0, 1.0001, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        url={null}
        variant="earth"
        cubeProps={cubeProps}
        setCubeProps={setCubeProps}
      />
    </>
  );
}
