import { messageAtom } from "@/utils/atoms";
import { Billboard, Text } from "@react-three/drei";
import { useAtomValue } from "jotai";

export default function Message() {
  const message = useAtomValue(messageAtom);

  return (
    <Billboard>
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.2}
        font="/fonts/BerkeleyMono-Regular.ttf"
      >
        {message}
        <meshBasicMaterial color="white" toneMapped={false} />
      </Text>
    </Billboard>
  );
}
