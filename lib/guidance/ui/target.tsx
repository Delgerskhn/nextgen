import {
  Box,
  Container,
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
    <Stack textAlign={"center"} my={"10"} bg="#fff">
      <Heading size="xl" py={10} mb={0}>
        ЗОРИЛТ
      </Heading>
      <Stack
        px={"10%"}
        w="full"
        py="5"
        style={{ marginTop: 0, marginBottom: 10 }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} pt={5} spacingX={"10"}>
          <Stack
            align={""}
            alignItems="center"
            borderWidth={"medium"}
            rounded={border.button_border_radius}
            borderColor={"primeOrange"}
            p={5}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Heading size={"md"} color="primeOrange">
              МОНГОЛ УЛСЫН ХЭМЖЭЭНД ЗАЛУУ ХҮН БҮРТ ХҮРТЭЭМЖТЭЙ БАЙХ
            </Heading>
            <Text>
              Улс орон даяар, 21 аймаг болон Улаанбаатар хотын бүх дүүргийн
              хэмжээнд залуучуудын туршлагыг үл харгалзан нээлттэй оролцох
              боломжийг бүрдүүлэх.
            </Text>
          </Stack>
          <Stack
            alignItems="center"
            borderWidth={"medium"}
            rounded={border.button_border_radius}
            borderColor={"primeOrange"}
            p={5}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Heading color={"primeOrange"} fontWeight="bold" size={"md"}>
              ИРГЭДИЙН АЖ АМЬДРАЛД ТУЛГАМДАЖ БУЙ АСУУДЛЫГ ОРОЛЦООНД ТУЛГУУРЛАН
              БОДИТООР ТОДОРХОЙЛОХ
            </Heading>
            <Text>
              Ард түмний санаа зовнисон асуудал бүрийг залуучуудын
              оролцоотойгоор нээн илрүүлэх.
            </Text>
          </Stack>
          <Stack
            alignItems="center"
            borderWidth={"medium"}
            rounded={border.button_border_radius}
            borderColor={"primeOrange"}
            p={5}
            transitionDuration=".5s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Heading color="primeOrange" size={"md"}>
              ЗАЛУУЧУУДЫГ ЧАДАВХЖУУЛЖ ШИЙДЭЛД ГАР БИЕ ОРОЛЦУУЛАХ
            </Heading>
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
