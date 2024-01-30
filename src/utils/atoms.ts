import { atom } from "jotai";

export const DEFAULT_MESSAGE = "Hi there, welcome!";

export const textAtom = atom(DEFAULT_MESSAGE);
export const autoRotateAtom = atom(true);