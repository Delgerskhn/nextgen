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
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { Countdown } from "./countdown";

export function Hero() {
  return (
    <>
      <Flex
        w={"full"}
        h={"600px"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          pt="5"
          w={"full"}
          justify={"flex-start"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"md"} align={"flex-start"} spacing={6}>
            <Image src="/hero_text.png" />
          </Stack>
          <Countdown />
        </VStack>
      </Flex>

      <VStack bg="gray.50" p="6" px="12">
        <Text
          // fontWeight={"bold"}
          color="gray.900"
          fontSize="lg"
          textAlign={"center"}
          lineHeight="8"
          fontWeight={"bold"}
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
