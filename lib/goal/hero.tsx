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
          "url(https://t4.ftcdn.net/jpg/04/84/11/15/360_F_484111532_W0WOkKeXQzF75XusA7R8e3llIDXqyCFm.jpg)"
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
            Зорилго
          </Heading>
        </VStack>
      </Flex>
    </>
  );
};
