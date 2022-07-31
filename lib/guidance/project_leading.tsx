import {
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { color } from "constant";

export const ProjectLeading = () => {
  return (
    <Stack textAlign={"center"} my={"10"}>
      <Heading my={10} mb={20}>
        ТӨСЛИЙН УРАЛДААНЫ ТЭРГҮҮЛЭХ ЧИГЛЭЛ
      </Heading>

      <Stack px={"20%"} bg={color.brown} w="full" py="10" my={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} pt={5}>
          <Stack align={""} alignItems="center">
            <Heading size={"md"}>Төрийн бүтээмжийн сэргэлт</Heading>
            <UnorderedList lineHeight={8}>
              <ListItem>Төрийн үйлчилгээ </ListItem>
              <ListItem>Төрийн үйл ажиллагааны ил тод байдал</ListItem>
              <ListItem>Цахимжилт</ListItem>
            </UnorderedList>
          </Stack>
          <Stack alignItems="center">
            <Heading size={"md"}>Ногоон хөгжлийн сэргэлт</Heading>
            <UnorderedList lineHeight={8}>
              <ListItem>Дахин боловсруулалт</ListItem>
              <ListItem>Байгалийн нөөцийн хамгаалал, нөхөн сэргээлт</ListItem>
              <ListItem>Аялал жуулчлал</ListItem>
            </UnorderedList>
          </Stack>
          <Stack alignItems="center">
            <Heading size={"md"}>Хот, хөдөөгийн сэргэлт</Heading>
            <UnorderedList lineHeight={8}>
              <ListItem>Боловсрол</ListItem>
              <ListItem>Эрүүл мэнд</ListItem>
              <ListItem>Хөдөлмөр эрхлэлт</ListItem>
              <ListItem>Амьдрах орчин</ListItem>
            </UnorderedList>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
