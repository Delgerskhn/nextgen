import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Image,
  Box,
  Link,
  Icon,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { Countdown } from "@lib/home/ui/countdown";
import { ProjectCountdown } from "@lib/home/ui/ProjectCountdown";
import { Footer } from "@ui/components/Footer";
import { Header } from "@ui/components/Header";
import { color } from "constant";
import { BsChevronRight } from "react-icons/bs";

export default function Hero() {
  const containerValue = useLayoutBreakPointValue();
  return (
    <>
      <Header />
      <VStack bg={color.white} p="12" py={20}>
        <Text
          // fontWeight={"bold"}
          fontSize="lg"
          textAlign={"center"}
          lineHeight="8"
          color="primeBlue"
          fontWeight={"bold"}
          mx={containerValue}
        >
          Шилдэг 30 төсөл хараахан шалгараагүй байна.
          <br />
          <ProjectCountdown />
        </Text>
        <Box h="8" />
      </VStack>
      <Footer />
    </>
  );
}
