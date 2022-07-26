import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";
import React from "react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
export const Goal = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Box px={value} w="full" textAlign="center" py={10}>
      <Icon as={FaLightbulb} boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Зорилго
      </Heading>
      <Text color={"gray.500"}>
        Монгол Улсын хөгжлийг хязгаарлагч хүчин зүйлсийг шийдвэрлэх Алсын хараа
        2050 болон “Шинэ сэргэлтийн бодлого” -д залуучуудын оролцоог
        нэмэгдүүлэх, салбар хоорондын хамтын ажиллагааг өргөжүүлэх, инновацлаг
        санаачилгыг дэмжихэд оршино.
      </Text>
    </Box>
  );
};
