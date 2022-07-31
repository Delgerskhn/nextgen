import {
  Flex,
  Stack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { Countdown } from "@lib/home/ui/countdown";
import { color } from "constant";
import React from "react";
export const Hero = () => {
  return (
    <>
      <Flex
        w={"100%"}
        minH={"500px"}
        bg={"primeBlue"}
        backgroundImage="url('/Header.png')"
        backgroundPosition={""}
        backgroundRepeat="cover"
      >
        <VStack
          w={"full"}
          justify={"center"}
          pt={"150px"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Heading size={"3xl"} color="white" fontFamily="NotoSans">
            Удирдамж
          </Heading>
          <Countdown />
        </VStack>
      </Flex>
    </>
  );
};
