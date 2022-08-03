import {
  Box,
  Container,
  Divider,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { border, color } from "constant";
import React, { ReactNode } from "react";
import { FcAssistant } from "react-icons/fc";

export const Target = () => {
  let value = useLayoutBreakPointValue();

  return (
    <Stack
      textAlign={"center"}
      my={"10"}
      bg="#fff"
      backgroundImage={"url(images/target.png)"}
      backgroundSize="cover"
    >
      <Heading size="xl" py={10} mb={0} color="#fff">
        ЗОРИЛТ
      </Heading>
      <Stack
        w="full"
        py="5"
        px={"10%"}
        style={{ marginTop: 0, marginBottom: 10 }}
      >
        <SimpleGrid
          spacingY={{ base: "10", md: "0" }}
          columns={{ base: 1, md: 3 }}
          py={10}
          spacingX={"10"}
          maxW={{ base: "full", lg: "6xl" }}
          mx={{ base: "", lg: "auto" }}
        >
          <Stack
            align={""}
            alignItems="center"
            rounded={border.button_border_radius}
            p={10}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
            bg="#fff"
            experimental_spaceY={"8"}
            position="relative"
          >
            <Heading size={"md"} h={{ base: "", xl: "20" }}>
              МОНГОЛ УЛСЫН ХЭМЖЭЭНД ЗАЛУУ ХҮН БҮРТ ХҮРТЭЭМЖТЭЙ БАЙХ
            </Heading>
            <Box bg="primeOrange" w="16" h="2" rounded={"md"} />
            <Text>
              Улс орон даяар, 21 аймаг болон Улаанбаатар хотын бүх дүүргийн
              хэмжээнд залуучуудын туршлагыг үл харгалзан нээлттэй оролцох
              боломжийг бүрдүүлэх.
            </Text>
          </Stack>
          <Stack
            align={""}
            alignItems="center"
            rounded={border.button_border_radius}
            p={10}
            px={5}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
            bg="#fff"
            experimental_spaceY={"8"}
          >
            <Heading fontWeight="bold" size={"md"} h={{ base: "", xl: "20" }}>
              ИРГЭДИЙН АЖ АМЬДРАЛД ТУЛГАМДАЖ БУЙ АСУУДЛЫГ ОРОЛЦООНД ТУЛГУУРЛАН
              БОДИТООР ТОДОРХОЙЛОХ
            </Heading>
            <Box bg="primeOrange" w="16" h="2" rounded={"md"} />
            <Text>
              Ард түмний санаа зовнисон асуудал бүрийг залуучуудын
              оролцоотойгоор нээн илрүүлэх.
            </Text>
          </Stack>
          <Stack
            alignItems="center"
            rounded={border.button_border_radius}
            p={10}
            px={5}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
            experimental_spaceY={"8"}
            bg="#fff"
          >
            <Heading size={"md"} h={{ base: "100", xl: "20" }}>
              ЗАЛУУЧУУДЫГ ЧАДАВХЖУУЛЖ ШИЙДЭЛД ГАР БИЕ ОРОЛЦУУЛАХ
            </Heading>
            <Box bg="primeOrange" w="16" h="2" rounded={"md"} />
            <Text>
              Aсуудлын шийдлийг залуучууд өөрсдөө олж, чадавхжуулах сургалтад
              хамрагдан төслөө хэрэгжүүлнэ.
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
