import { Box, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

export const Document = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Box direction="row" display={"flex"} alignItems="center">
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
            ТӨСЛИЙН БАРИМТ БИЧИГТ ТАВИГДАХ ШААРДЛАГА
          </Heading>
        </Box>
        <UnorderedList textAlign={"left"} lineHeight={8} ml="10">
          <ListItem>
            Өгөгдсөн загварын дагуу бичигдсэн төсөл /pdf формат/
          </ListItem>
          <ListItem>Төслийн танилцуулга видео /8 минут/</ListItem>
        </UnorderedList>
      </Box>
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
