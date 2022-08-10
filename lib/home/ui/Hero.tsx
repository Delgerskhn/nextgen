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
        <Stack direction={{ base: "column", md: "row" }} pt={"100px"} w="full">
          <Stack direction={"column"} alignItems="flex-start">
            <Countdown />
            <Button
              bg={color.orange}
              _hover={{}}
              as="a"
              href={"/auth/signup"}
              _focus={{}}
              borderRadius={"8px"}
              textColor={color.white}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
          <Stack pl={{ base: 0, md: "30" }} pt={{ base: "10", md: 0 }}>
            <Image src="images/home-hero.png" w={"full"} />
          </Stack>
        </Stack>
      </Flex>
      <VStack bg={color.white} p="12" py={20}>
        <Text
          fontSize="lg"
          textAlign={"center"}
          lineHeight="8"
          color="primeBlue"
          fontWeight={"bold"}
          mx={containerValue}
        >
          “ШИНЭ СЭРГЭЛТ: NEXTGEN 2022” төслийн уралдаан нь Монгол Улсын иргэдийн
          аж амьдралд бодитоор тулгамдаж буй хөгжлийн асуудлуудыг залуучуудын
          оролцоо, бүтээлч санаачилга болон хамтын ажиллагаанд тулгуурлан
          оновчтой тодорхойлж, шийдлийг хэрэгжүүлэх төслийн уралдаан юм.
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
