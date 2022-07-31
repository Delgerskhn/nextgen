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
    </Stack>
  );
};
