import { Box, useDisclosure } from "@chakra-ui/react";
import { ReactChild } from "react";

export const FlipBox = ({
  front,
  back,
}: {
  front: ReactChild;
  back: ReactChild;
}) => {
  const { isOpen: isFlipped, onOpen, onClose } = useDisclosure();

  return (
    <Box
      onMouseEnter={onOpen}
      position="relative"
      transition={"transform 0.8s"}
      style={{ transformStyle: "preserve-3d" }}
      onMouseLeave={onClose}
    >
      <Box
        className="flip-card-front"
        position="absolute"
        w="full"
        h="full"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "none",
          backfaceVisibility: "hidden",
        }}
      >
        {front}
      </Box>
      <Box
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
        className="flip-card-back"
        position="absolute"
        w="full"
        h="full"
      >
        {back}
      </Box>
    </Box>
  );
};
