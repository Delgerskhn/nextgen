import { Box, BoxProps, useColorModeValue } from "@ui/index";

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("gray.50", "black")}
    py="8"
    px={{ base: "4", md: "10" }}
    shadow="base"
    borderRadius="3px"
    {...props}
  />
);
