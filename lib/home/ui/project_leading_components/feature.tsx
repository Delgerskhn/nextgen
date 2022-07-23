import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface FeatureProps {
  title: string;
  icon: ReactElement;
  texts: string[];
}
export const Feature = ({ title, icon, texts }: FeatureProps) => (
  <Stack alignItems={"center"}>
    <Flex
      w={16}
      h={16}
      align={"center"}
      justify={"center"}
      color={"white"}
      rounded={"full"}
      bg={"gray.100"}
      mb={1}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    {texts.map((el, i) => {
      return (
        <Text key={i} color={"gray.600"}>
          {el}
        </Text>
      );
    })}
  </Stack>
);
