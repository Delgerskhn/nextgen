import {
  Flex,
  Stack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { color } from "constant";
import React from "react";
export const Hero = () => {
  return (
    <>
      <Flex w={"100%"} h={"300px"} bg={color.primary}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Heading size={"3xl"} color="white" fontFamily="NotoSans">
            Удирдамж
          </Heading>
        </VStack>
      </Flex>
    </>
  );
};
