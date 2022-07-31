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
        bgColor={"primeBlue"}
        py={10}
        px={containerValue}
        backgroundImage="url('/Header.png')"
        backgroundPosition={""}
        backgroundRepeat="cover"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          pt={"150px"}
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
          fontSize="lg"
          textAlign={"center"}
          lineHeight="8"
          color="primeBlue"
          fontWeight={"bold"}
          mx={containerValue}
        >
          Шинэ сэргэлт (NextGen) залуучуудын төслийн уралдаан нь Монгол Улсын
          иргэдийн аж амьдралд бодитоор тулгамдаж буй хөгжлийн асуудлуудыг
          залуучуудын оролцоо, бүтээлч санаачилга болон хамтын ажиллагаанд
          тулгуурлан оновчтой тодорхойлж, шийдлийг хэрэгжүүлэх төслийн уралдаан
          бөгөөд чадавхжуулах арга хэмжээ юм.
        </Text>
        <Box h="8" />
        <Button
          fontWeight={"bold"}
          variant="outline"
          fontSize="lg"
          rounded="md"
          px="12"
          py="4"
          as="a"
          href="/guidance"
        >{`Дэлгэрэнгүй`}</Button>
        {/* <Link color="blue.400" href="#" display="flex" alignItems={"center"}>
          Дэлгэрэнгүй
          <Icon as={BsChevronRight} />
        </Link> */}
      </VStack>
    </>
  );
}
