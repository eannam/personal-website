import { CubeProps } from "@/components/clickable-facade";
import { atom } from "jotai";

export const messageAtom = atom("");
export const autoRotateAtom = atom(true);
export const cubePropsAtom = atom<CubeProps>({
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
