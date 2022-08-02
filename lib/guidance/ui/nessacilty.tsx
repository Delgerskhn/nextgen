import {
  Box,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

export const Nessacility = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
      >
        <UnorderedList
          py={{ base: "10", md: "0" }}
          textAlign={"left"}
          lineHeight={8}
          mr="10"
          textColor={"primeOrange"}
        >
          <ListItem>
            <Text color={"black"}>Монгол Улсын иргэн байх</Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>15-34 настай байх</Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>Олон нийтийн эрх ашигт нийцсэн байх</Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Тухайн орон нутаг болон харьяа газартаа хэрэгжих боломжтой байх{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төслийн үйл ажиллагаа ашиг сонирхлын зөрчилгүй байх
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төслийн хүрэх үр дүн тодорхой, бодитой байх
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төслийг цаашид үргэлжлүүлэх, өргөжүүлэн хэрэгжүүлэх боломжтой байх
            </Text>
          </ListItem>
        </UnorderedList>
        <Box
          bg={"primeOrange"}
          px={"10"}
          py={10}
          maxW={{ base: "full", md: "40%" }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          rounded={"8px"}
          shadow="dark-lg"
          transition={"all"}
          transitionDuration={"1s"}
          _hover={{
            transform: "translate(-20px)",
          }}
          textAlign="center"
        >
          <Heading
            color={"primeBlue"}
            fontSize="3xl"
            borderColor={"primeBlue"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ТӨСЛИЙН УРАЛДААНД ОРОЛЦОХОД ТАВИГДАХ ШААРДЛАГА
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
};

export const Receive = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box
          bg={"primeBlue"}
          px={"20"}
          py={10}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          rounded={"8px"}
          shadow="dark-lg"
          transition={"all"}
          transitionDuration={"1s"}
          textAlign="center"
          _hover={{
            transform: "translate(-20px)",
          }}
        >
          <Heading
            color={"primeOrange"}
            fontSize="4xl"
            borderColor={"primeOrange"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ТӨСӨЛ ХҮЛЭЭН АВАХ
          </Heading>
        </Box>
        <UnorderedList
          textAlign={"left"}
          py={{ base: "10", md: "0" }}
          lineHeight={8}
          pl="10"
          textColor={"primeOrange"}
        >
          <ListItem>
            <Text color={"black"}>
              Төслийг www.nextgen.mn вэбсайтад баг тус бүртгэл хийлгэн илгээх ба
              2022 оны 08 дугаар сарын 29-ны өдрөөс 09 сарын 25-ны өдрийн 00:00
              цаг хүртэл дараах шаардлагын дагуу хүлээн авна.
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Өгөгдсөн загварын дагуу бичигдсэн төслийн баримт бичиг (pdf
              формат){" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төслийн багийн гишүүдийн танилцуулга видео (5 минут хүртэлх)
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төслийн танилцуулга видео (8 минут хүртэлх)
            </Text>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};

export const Selection = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
      >
        <UnorderedList
          textAlign={"left"}
          py={{ base: "10", md: "0" }}
          lineHeight={8}
          mr="10"
          textColor={"primeOrange"}
        >
          <ListItem>
            <Text color={"black"}>
              Монгол Улсын 21 аймаг, 9 дүүрэг тус бүрээс нэг төслийг сонгон
              шалгаруулна. Уралдаанд оролцогчид багаар ажиллах бөгөөд нэг баг
              2-5 хүртэлх хүнтэй байна.
            </Text>
          </ListItem>
          <ListItem>
            <Text color={"black"}>
              Төрийн, төрийн бус, хувийн хэвшлийн, олон улсын байгууллагын, орон
              нутгийн удирдлагагын зэрэг төлөөлөөлүүдээс бүрдсэн шүүгчдийн
              бүрэлдэхүүн зохион байгуулагчдын баталсан журмын дагуу дараах
              шалгуураар төслийг үнэлж, сонгон шалгаруулна. Шалгарсан төслийг
              2022.09.28-ны өдөр зарлаж шалгарсан багуудад утас болон имэйлээр
              мэдэгдэнэ.
            </Text>
          </ListItem>
        </UnorderedList>
        <Box
          bg={"primeOrange"}
          px={"10"}
          py={10}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          rounded={"8px"}
          shadow="dark-lg"
          textAlign="center"
          transition={"all"}
          transitionDuration={"1s"}
          _hover={{
            transform: "translate(-20px)",
          }}
        >
          <Heading
            color={"primeBlue"}
            fontSize="4xl"
            borderColor={"primeBlue"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ТӨСЛИЙН ШАЛГАРУУЛАЛТ
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
};
