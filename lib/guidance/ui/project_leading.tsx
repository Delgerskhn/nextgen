import {
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { color } from "constant";
import { FcAssistant } from "react-icons/fc";

export const ProjectLeading = () => {
  return (
    <Stack textAlign={"center"} my={"10"} pt={30}>
      <Stack
        px={"10%"}
        bg={color.brown}
        w="full"
        py="10"
        style={{ marginTop: 0 }}
      >
        <Heading color={"primeBlue"} size="xl" pt={20} mb={0}>
          ТӨСЛИЙН УРАЛДААНЫ ТЭРГҮҮЛЭХ ЧИГЛЭЛ
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} py={20} rowGap="20">
          <Stack align={""} alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading size={"md"} color="primeBlue">
              ТӨРИЙН БҮТЭЭМЖИЙН СЭРГЭЛТ{" "}
            </Heading>
            {/* <UnorderedList
              listStylePosition={"inside"}
              textColor={"primeBlue"}
              lineHeight={8}
            >
              <ListItem>Төрийн үйлчилгээ </ListItem>
              <ListItem>Төрийн үйл ажиллагааны ил тод байдал</ListItem>
              <ListItem>Цахимжилт</ListItem>
            </UnorderedList> */}
          </Stack>
          <Stack alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading color={"primeBlue"} fontWeight="bold" size={"md"}>
              НОГООН ХӨГЖЛИЙН СЭРГЭЛТ{" "}
            </Heading>
            {/* <UnorderedList
              lineHeight={8}
              listStylePosition={"inside"}
              textColor={"primeBlue"}
            >
              <ListItem>Дахин боловсруулалт</ListItem>
              <ListItem>Байгалийн нөөцийн хамгаалал, нөхөн сэргээлт</ListItem>
              <ListItem>Аялал жуулчлал</ListItem>
            </UnorderedList> */}
          </Stack>
          <Stack alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading color="primeBlue" size={"md"}>
              ХОТ, ХӨДӨӨГИЙН СЭРГЭЛТ
            </Heading>
            {/* <UnorderedList
              lineHeight={8}
              listStylePosition={"inside"}
              textColor={"primeBlue"}
            >
              <ListItem>Боловсрол</ListItem>
              <ListItem>Эрүүл мэнд</ListItem>
              <ListItem>Хөдөлмөр эрхлэлт</ListItem>
              <ListItem>Амьдрах орчин</ListItem>
            </UnorderedList> */}
          </Stack>
          <Stack alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading color="primeBlue" size={"md"}>
              БООМТЫН СЭРГЭЛТ
            </Heading>
          </Stack>
          <Stack alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading color="primeBlue" size={"md"}>
              ЭРЧИМ ХҮЧНИЙ СЭРГЭЛТ
            </Heading>
          </Stack>
          <Stack alignItems="center">
            {/* <Icon as={FcAssistant} w={10} h={10} /> */}
            <Heading color="primeBlue" size={"md"}>
              АЖ ҮЙЛДВЭРЖИЛТИЙН СЭРГЭЛТ{" "}
            </Heading>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
