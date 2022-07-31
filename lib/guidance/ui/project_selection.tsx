import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  TypographyProps,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";

export const ProjectSelection = () => {
  const [is_show, setShow] = useState(false);
  const [selection, setSelection] = useState(0);

  return (
    <Stack p={20} bg="black" px="40" py={32}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} position={"relative"}>
        <BoxItem
          src={"/guidance-1.jpg"}
          title={"СОНГОН ШАЛГАРУУЛАЛТ"}
          sub_title={
            "Монгол Улсын 21 аймаг 9 дүүрэгт тус бүр нэг төслийг сонгон шалгаруулна. Уралдаанд оролцогчид багаар ажиллах бөгөөд нэг баг 5 хүртэлх хүнтэй байна. Төрийн, улс төр, нийгэм, бизнес, олон улсын байгууллагуудын төлөөллөөс бүрдсэн шүүгчдийн бүрэлдэхүүн дараах шалгуураар төслийг үнэлж, сонгон шалгаруулна."
          }
          content={[
            "Төслийн цар хүрээ",
            "Асуудлыг бүтээлчээр шийдэх байдал",
            "Өргөжүүлэх, үргэлжлүүлэх боломж",
            "Хүний эрхийг дээдэлсэн байдал",
            "Шинэ сэргэлтийн бодлогын хүрээнд",
          ]}
          align="left"
        />
        <Stack
          position={"relative"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Box transform={"rotate(-45deg)"} w={300} h={300} bg="primeOrange">
            <Box bg="deepOrange" w="full" zIndex={10} />
          </Box>
          <Box position={"absolute"} w={300} h={300}>
            <Image src="/guidance-3.jpg" />
          </Box>
        </Stack>
        <BoxItem
          src={"/guidance-1.jpg"}
          title={"БҮРТГҮҮЛЭХЭД ТАВИГДАХ ШААРДЛАГА"}
          sub_title={""}
          content={[
            "Монгол Улсын иргэн байх",
            "15-34 настай",
            "Ганцаараа эсвэл багаараа бүртгүүлэх боломжтой",
            "Ганцаараа төсөл санаачилбал уралдаанд сонгогдсоны дараагаар багт хуваарилагдана",
            "Багаар бүртгүүлж байгаа тохиолдолд 5 хүртэлх хүний бүрэлдэхүүнтэй байна",
            "Өөрийн болон багийн танилцуулга видео /5 минут/",
            "Өгөгдсөн загварын дагуу бичигдсэн төслийн баримт бичиг /word болон pdf формат/",
            "Төслийн танилцуулга видео /8 минут/",
          ]}
          align={"right"}
        />
      </SimpleGrid>
    </Stack>
  );
};

type BoxItemType = {
  src: string;
  title: string;
  sub_title: string;
  content: string[];
  align: CanvasTextAlign;
};
const BoxItem = ({ src, title, sub_title, content, align }: BoxItemType) => {
  return (
    <Box
      display={"flex"}
      experimental_spaceY="5"
      flexDirection="column"
      alignItems={"center"}
    >
      <Image w={150} src={src} />
      <Heading color="white" textAlign={align}>
        {title}
      </Heading>
      <Button bg="white" color={"black"} w="2xs">
        Харах
      </Button>
      {/* <Text size="sm" color={"primeOrange"} textAlign={align}>
        {sub_title}
      </Text> */}
      {/* <UnorderedList textAlign={align}>
        {content.map((el, i) => (
          <ListItem key={i}>{el}</ListItem>
        ))}
      </UnorderedList> */}
    </Box>
  );
};
