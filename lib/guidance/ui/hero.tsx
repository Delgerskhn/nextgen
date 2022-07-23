import {
  Flex,
  Stack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import React from "react";
export const Hero = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"300px"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Heading size={"3xl"} color="white" fontFamily="NotoSans">
            Удирдамж
          </Heading>
        </VStack>
      </Flex>
    </>
  );
};