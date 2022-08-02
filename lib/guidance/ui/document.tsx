import {
  Box,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

export const Document = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Stack direction={{ base: "column", md: "row" }} alignItems="center">
        <Box
          bg={"primeBlue"}
          px={"10"}
          py={10}
          maxW={{ base: "full", md: "45%" }}
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
            fontSize="3xl"
            borderColor={"primeOrange"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ТӨСЛИЙН БАРИМТ БИЧИГТ ТАВИГДАХ ШААРДЛАГА
          </Heading>
        </Box>
        <UnorderedList
          pt={{ base: "10", md: "0" }}
          textAlign={"left"}
          lineHeight={8}
          pl="10"
          textColor={"primeOrange"}
        >
          <ListItem>
            <Text color="black">
              Өгөгдсөн загварын дагуу бичигдсэн төсөл /pdf формат/
            </Text>
          </ListItem>
          <ListItem>
            <Text color="black">Төслийн танилцуулга видео /8 минут/</Text>
          </ListItem>
          <ListItem>
            <Text color="black">
              Төслийн багийн гишүүдийн танилцуулга видео (5 минут хүртэлх)
            </Text>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};

{
  /* <Stack>
        <Heading>ТӨСЛИЙН БАРИМТ БИЧИГТ ТАВИГДАХ ШААРДЛАГА</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>
            Өгөгдсөн загварын дагуу бичигдсэн төсөл /pdf формат/
          </ListItem>
          <ListItem>Төслийн танилцуулга видео /8 минут/</ListItem>
        </UnorderedList>
      </Stack> */
}
