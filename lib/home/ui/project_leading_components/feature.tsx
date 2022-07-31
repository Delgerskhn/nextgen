import { Flex, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface FeatureProps {
  title: string;
  icon: ReactElement;
  texts: string[];
}
export const Feature = ({ title, icon, texts }: FeatureProps) => (
  <Stack alignItems={"center"}>
    <Flex w={16} h={16} align={"center"} justify={"center"} mb={1}>
      {icon}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    <UnorderedList spacing={5} pt={5}>
      {texts.map((el, i) => {
        return (
          <ListItem listStylePos={"inside"} key={i} color={"gray.600"}>
            {el}
          </ListItem>
        );
      })}
    </UnorderedList>
  </Stack>
);
