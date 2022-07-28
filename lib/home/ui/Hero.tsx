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
import { color } from "constant";
import { BsChevronRight } from "react-icons/bs";
import { Countdown } from "./countdown";

export function Hero() {
  const containerValue = useLayoutBreakPointValue();
  return (
    <>
      <Flex
        w={"full"}
        minH={"500px"}
        bgColor={color.primary}
        py={10}
        px={containerValue}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack direction={"column"} alignItems="center">
            <Stack
              maxW={"2xl"}
              alignItems={"center"}
              direction={"row"}
              justifyContent="center"
            >
              <Image src="/hero_text.png" />
            </Stack>
            <Countdown />
          </Stack>
          <Stack pl={{ base: 0, md: "40" }}>
            <Image src="/meeting.png" w={"100%"} />
          </Stack>
        </Stack>
      </Flex>
      <VStack bg={color.white} p="12" py={20}>
        <Text
          // fontWeight={"bold"}
          color="gray.900"
          fontSize="lg"
          textAlign={"center"}
          lineHeight="8"
          fontWeight={"bold"}
          mx={containerValue}
        >
          Шинэ сэргэлт (NextGen) залуучуудын төслийн уралдаан нь Монгол Улсын
          иргэдийн аж амьдралд бодитоор тулгамдаж буй хөгжлийн асуудлуудыг
          залуучуудын оролцоо, бүтээлч санаачилга болон хамтын ажиллагаанд
          тулгуурлан оновчтой тодорхойлж, шийдлийг хэрэгжүүлэх төслийн уралдаан
          бөгөөд чадавхжуулах арга хэмжээ юм.
        </Text>
        <Link
          fontWeight={"bold"}
          fontSize="lg"
          color="#003366"
          href="/guidance"
        >{`Дэлгэрэнгүй >`}</Link>
        {/* <Link color="blue.400" href="#" display="flex" alignItems={"center"}>
          Дэлгэрэнгүй
          <Icon as={BsChevronRight} />
        </Link> */}
      </VStack>
    </>
  );
}
