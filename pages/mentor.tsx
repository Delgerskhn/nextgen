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
      <VStack bg={color.white} height="100vh" p="12" py={20}>
        <Heading textAlign={"center"} color="primeBlue" mx={containerValue}>
          Ментор болон сургагч багш нарын мэдээлэл удахгүй орно.
        </Heading>

        <Box h="8" />
      </VStack>
      <Box position="absolute" bottom="0">
        <Footer />
      </Box>
    </>
  );
}
