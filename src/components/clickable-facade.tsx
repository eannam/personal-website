import { DEFAULT_MESSAGE, autoRotateAtom, messageAtom } from "@/utils/atoms";
import { ThreeEvent } from "@react-three/fiber";
import { useSetAtom } from "jotai";

type CubeVariant = "x" | "github" | "audyo" | "linkedin" | "info" | "earth";

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
  const setMessage = useSetAtom(messageAtom);
  const setRotate = useSetAtom(autoRotateAtom);

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    const newScale = variant === "earth" ? 0.0011 : 0.021;
    const newLightIntensity = variant === "earth" ? 10 : 30;

    document.body.style.cursor = "pointer";

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

    setMessage(cubeProps[variant].message);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    document.body.style.cursor = "auto";

    const newScale = variant === "earth" ? 0.001 : 0.02;
    const newLightIntensity = variant === "earth" ? 5 : 20;

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

    setTimeout(() => {
      setMessage(DEFAULT_MESSAGE);
    }, 500);
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    if (url) {
      window.open(url, "_blank");
    } else {
      setMessage(cubeProps[variant].message);
      setTimeout(() => {
        setMessage(DEFAULT_MESSAGE);
      }, 2_000);
    }
  };

  return (
    <mesh
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
