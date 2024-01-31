import { cubePropsAtom, messageAtom } from "@/utils/atoms";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom, useAtomValue } from "jotai";
import { useRef } from "react";
import * as THREE from "three";

function CameraRaycaster() {
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster());

  const [message, setMessage] = useAtom(messageAtom);
  const cubeProps = useAtomValue(cubePropsAtom);

  useFrame(() => {
    raycaster.current.set(
      camera.position,
      new THREE.Vector3(0, 0, 0).sub(camera.position).normalize()
    );

    const [intersect] = raycaster.current.intersectObjects(
      scene.children,
      true
    );

    if (intersect && intersect.object.name) {
      const variant = intersect.object.name as keyof typeof cubeProps;
      if (message !== cubeProps[variant].message) {
        setMessage(cubeProps[variant].message);
      }
    }
  });

  return null;
}

export default CameraRaycaster;
