import {
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { color } from "constant";

export const Content = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack
      mx={value}
      mt={10}
      experimental_spaceY={"10"}
      justifyContent="center"
      direction={"column"}
      alignItems="center"
    >
      <Stack>
        <Heading>ТӨСЛИЙН СОНГОН ШАЛГАРУУЛАЛТ</Heading>
        <Text textAlign={"justify"} lineHeight={8} pt={5}>
          Монгол Улсын 21 аймаг 9 дүүрэгт тус бүр нэг төслийг сонгон
          шалгаруулна. Уралдаанд оролцогчид багаар ажиллах бөгөөд нэг баг 5
          хүртэлх хүнтэй байна. Төрийн, улс төр, нийгэм, бизнес, олон улсын
          байгууллагуудын төлөөллөөс бүрдсэн шүүгчдийн бүрэлдэхүүн дараах
          шалгуураар төслийг үнэлж, сонгон шалгаруулна.
        </Text>
        <UnorderedList lineHeight={8}>
          <ListItem>Төслийн цар хүрээ</ListItem>
          <ListItem>Асуудлыг бүтээлчээр шийдэх байдал</ListItem>
          <ListItem>Өргөжүүлэх, үргэлжлүүлэх боломж</ListItem>
          <ListItem>Хүний эрхийг дээдэлсэн байдал</ListItem>
          <ListItem>Шинэ сэргэлтийн бодлогын хүрээнд</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ХАМРАГДАХ БОЛОМЖГҮЙ ТӨСӨЛ</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>
            Тоног төхөөрөмж, тавилга хэрэгсэл худалдан авалт хийх
          </ListItem>
          <ListItem>Хандив, буяны арга хэмжээ </ListItem>
          <ListItem>Монгол Улсын хууль тогтоомжид нийцээгүй</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ТӨСЛИЙН УРАЛДААНД БҮРТГҮҮЛЭХЭД ТАВИГДАХ ШААРДЛАГА</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>Монгол Улсын иргэн байх</ListItem>
          <ListItem>15-34 настай</ListItem>
          <ListItem>Ганцаараа эсвэл багаараа бүртгүүлэх боломжтой</ListItem>
          <ListItem>
            Ганцаараа төсөл санаачилбал уралдаанд сонгогдсоны дараагаар багт
            хуваарилагдана
          </ListItem>
          <ListItem>
            Багаар бүртгүүлж байгаа тохиолдолд 5 хүртэлх хүний бүрэлдэхүүнтэй
            байна
          </ListItem>
          <ListItem>Өөрийн болон багийн танилцуулга видео /5 минут/</ListItem>
          <ListItem>
            Өгөгдсөн загварын дагуу бичигдсэн төслийн баримт бичиг /word болон
            pdf формат/
          </ListItem>
          <ListItem>Төслийн танилцуулга видео /8 минут/ </ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ТӨСЛИЙН САНХҮҮЖИЛТ БОЛОН ШАГНАЛ УРАМШУУЛАЛ</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>Шалгарсан төслүүдэд 20,000,000₮ санхүүжилт олгоно</ListItem>
          <ListItem>
            Төслийн тайлан хурал зохион байгуулж шилдэг төслүүдийг шалгаруулан
            дараах байдлаар урамшуулна
          </ListItem>
          <ListItem>
            Нэгдүгээр байр. Гран при төсөл /Гадаадад магистрын түвшинд суралцах
            сургалтын тэтгэлэг/
          </ListItem>
          <ListItem>
            Хоёрдугаар байр. 1 төсөл /Гадаадад богино хугацааны чадавхжуулах
            сургалтад хамрагдах тэтгэлэг/
          </ListItem>
          <ListItem>
            Гуравдугаар байр. 1 төсөл /Гадаадад туршлага судлах аяллын тэтгэлэг/
          </ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ТӨСЛИЙН СОНГОН ШАЛГАРУУЛАЛТ</Heading>
        <Text lineHeight={8} pt={5}>
          Улс төр - нийгэм, бизнес, олон улсын байгууллагуудын төлөөллөөс
          бүрдсэн шүүгчдийн бүрэлдэхүүн дараах шалгуураар төслийг үнэлж, сонгон
          шалгаруулна
        </Text>
        <UnorderedList lineHeight={8}>
          <ListItem>Төслийн цар хүрээ</ListItem>
          <ListItem>Асуудлыг бүтээлчээр шийдэх</ListItem>
          <ListItem>Өргөжүүлэх, үргэлжлүүлэх боломж</ListItem>
          <ListItem>Хүний эрхийг дээдлэх</ListItem>
          <ListItem>Шинэ сэргэлтийн бодлогын хэрэгжилт хангах</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ТӨСЛИЙН БАРИМТ БИЧИГТ ТАВИГДАХ ШААРДЛАГА</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>
            Өгөгдсөн загварын дагуу бичигдсэн төсөл /pdf формат/
          </ListItem>
          <ListItem>Төслийн танилцуулга видео /8 минут/</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Heading>ХАМРАГДАХ БОЛОМЖГҮЙ ТӨСӨЛ</Heading>
        <UnorderedList lineHeight={8} pt={5}>
          <ListItem>
            Тоног төхөөрөмж, тавилга хэрэгсэл худалдан авалт хийх
          </ListItem>
          <ListItem>Хандив, буяны арга хэмжээ </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};
