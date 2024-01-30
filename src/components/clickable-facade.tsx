import { DEFAULT_MESSAGE, autoRotateAtom, textAtom } from "@/utils/atoms";
import { useSetAtom } from "jotai";

export default function ClickableFacade({
  position,
  rotation,
  url,
  stateKey,
  cubeProps,
  setCubeProps,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string | null;
  stateKey: "x" | "github" | "audyo" | "linkedin" | "info";
  cubeProps: any;
  setCubeProps: any;
}) {
  const setText = useSetAtom(textAtom);
  const setRotate = useSetAtom(autoRotateAtom);

  return (
    <mesh
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setCubeProps({
          ...cubeProps,
          [stateKey]: {
            ...cubeProps[stateKey],
            scale: 0.021,
            lightIntensity: 40,
          },
        });
        if (setRotate) {
          setRotate(false);
        }
        let text = "";
        if (stateKey === "audyo") {
          text = "I'm cofounder & CTO here.";
        } else if (stateKey === "linkedin") {
          text = "I'm on LinkedIn.";
        } else if (stateKey === "x") {
          text = "I'm on X.";
        } else if (stateKey === "github") {
          text = "Check out my GitHub.";
        } else if (stateKey === "info") {
          text = "Coming soon...";
        } else {
          text = DEFAULT_MESSAGE;
        }
        setText(text);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setCubeProps({
          ...cubeProps,
          [stateKey]: {
            ...cubeProps[stateKey],
            scale: 0.02,
            lightIntensity: 20,
          },
        });
        if (setRotate) {
          setRotate(true);
        }
        setText(DEFAULT_MESSAGE);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (url) {
          window.open(url, "_blank");
        }
      }}
    >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial transparent opacity={0} />
    </mesh>
  );
}
