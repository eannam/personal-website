import { autoRotateAtom } from "@/utils/atoms";
import { useCursor } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { useSetAtom } from "jotai";
import { useState } from "react";

// Yes, the Earth is a cube, deal with it.
type CubeVariant = "x" | "github" | "audyo" | "linkedin" | "info" | "substack";

type Cube = {
  color: string;
  message: string;
  scale: number;
  lightIntensity: number;
};

export type CubeProps = Record<CubeVariant, Cube>;

export default function ClickableFacade({
  position,
  rotation,
  url,
  variant,
  cubeProps,
  setCubeProps,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string | null;
  variant: CubeVariant;
  cubeProps: CubeProps;
  setCubeProps: any;
}) {
  const [hovered, setHovered] = useState(false);

  const setRotate = useSetAtom(autoRotateAtom);

  useCursor(hovered, "pointer", "auto");

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    setHovered(true);

    // const newScale = variant === "earth" ? 0.0011 : 0.021;
    // const newLightIntensity = variant === "earth" ? 10 : 30;

    const newScale = 0.021;
    const newLightIntensity = 30;

    setCubeProps({
      ...cubeProps,
      [variant]: {
        ...cubeProps[variant],
        scale: newScale,
        lightIntensity: newLightIntensity,
      },
    });

    if (setRotate) {
      setRotate(false);
    }
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    setHovered(false);

    // const newScale = variant === "earth" ? 0.001 : 0.02;
    // const newLightIntensity = variant === "earth" ? 5 : 20;

    const newScale = 0.02;
    const newLightIntensity = 20;

    setCubeProps({
      ...cubeProps,
      [variant]: {
        ...cubeProps[variant],
        scale: newScale,
        lightIntensity: newLightIntensity,
      },
    });

    if (setRotate) {
      setRotate(true);
    }
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <mesh
      name={variant}
      position={position}
      rotation={rotation}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial transparent opacity={0} />
    </mesh>
  );
}
