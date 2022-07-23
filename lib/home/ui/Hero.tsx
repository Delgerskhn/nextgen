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

export function Hero() {
  return (
    <>
      <Flex
        w={"100vw"}
        h={"600px"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            {/* <Heading
            color={"white"}
            as="h1"
            size="4xl"
            fontWeight={700}
            lineHeight={1.2}
            // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Шинэ сэргэлт
          </Heading> */}
            <Image src="/hero_text.png" />
            <Stack direction={"row"}>
              {/* <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button> */}
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <VStack m="6" mx="12">
        <Text fontWeight={"bold"} fontSize="xl" textAlign={"center"}>
          Шинэ сэргэлт (NextGen) төслийн уралдаан нь Монгол Улсын иргэдийн аж
          амьдралд бодитоор тулгамдаж буй хөгжлийн асуудлуудыг залуучуудын
          оролцоо, бүтээлч санаачилга болон хамтын ажиллагаанд тулгуурлан
          оновчтой тодорхойлж, шийдлийг хэрэгжүүлэх төслийн уралдаан бөгөөд
          чадавхжуулах арга хэмжээ юм.
        </Text>
        <Link color="blue.400" href="#" display="flex" alignItems={"center"}>
          Дэлгэрэнгүй
          <Icon as={BsChevronRight} />
        </Link>
      </VStack>
    </>
  );
}
