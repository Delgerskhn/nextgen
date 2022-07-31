import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaCheckCircle, FaMedal } from "react-icons/fa";

const options = [
  { id: 1, desc: "Гадаадад магистрын түвшинд суралцах сургалтын тэтгэлэг" },
  {
    id: 2,
    desc: "Гадаадад богино хугацааны чадавхжуулах сургалтад хамрагдах тэтгэлэг",
  },
  { id: 3, desc: "Гадаадад туршлага судлах аяллын тэтгэлэг" },
];
interface PackageTierProps {
  color: string;
  sub_title: string;
  content: string;
  title: string;
}
const PackageTier = ({
  color,
  title,
  content,
  sub_title,
}: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "column",
      }}
      alignItems={{ md: "center" }}
    >
      <Icon as={FaMedal} fontSize="8xl" color={color} />
      <Stack experimental_spaceY={"5"} alignItems="center" py="5">
        <Heading fontSize={"lg"}>{title}</Heading>
        <Text textAlign={"center"}>{sub_title}</Text>
      </Stack>
    </Stack>
  );
};
export const Financing = () => {
  return (
    <Box bg="#fff" py={20} min={"100vh"} px={{ base: "5%", lg: "20%" }}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
          }}
        >
          <Stack
            width={{
              base: "100%",
            }}
            textAlign={"center"}
          >
            <Heading size={"xl"}>ТӨСЛИЙН САНХҮҮЖИЛТ БОЛОН ШАГНАЛ</Heading>
            {/* <Heading fontSize={"9xl"} py={5} color={"deepGreen"}>
              20,000,000₮
            </Heading> */}
            <Text textAlign={"center"} pt={3}>
              Төслийн тайлан хурал зохион байгуулж шилдэг төслүүдийг шалгаруулан
              дараах байдлаар урамшуулна
            </Text>
          </Stack>
          <Stack
            width={{
              base: "100%",
            }}
            pt={10}
          >
            <UnorderedList
              textColor={"primeOrange"}
              lineHeight={8}
              experimental_spaceY={5}
            >
              <ListItem>
                <Text color={"black"}>
                  Шалгарсан 30 төсөл тус бүрт <b>20,000,000₮</b> хүртэлх
                  санхүүжилт олгоно. Төсөл хэрэгжүүлэгч нь нэмэлт санхүүжилтийг
                  бүрдүүлж болно.{" "}
                </Text>
              </ListItem>
              <ListItem>
                <Text color={"black"}>
                  Шалгарсан төслийн багийн гишүүдийн Улаанбаатар хотод зохион
                  байгуулах чадавхжуулах сургалтад хамрагдахтай холбоотой гарах
                  байр, хоол, унааны зардлыг зохион байгуулагч тал хариуцна.
                </Text>
              </ListItem>
              <ListItem>
                <Text color={"black"}>
                  30 төслөөс шалгарсан шилдэг төслүүдийн багийг дараах байдлаар
                  урамшуулна.{" "}
                </Text>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <PackageTier
            sub_title="Гран при төсөл"
            title="Нэгдүгээр байр"
            color="deepGreen"
            content="Гадаадад магистрын түвшинд суралцах сургалтын тэтгэлэг"
          />
          <Center>
            <Divider orientation="vertical" bg="black" />
          </Center>

          <PackageTier
            title="Хоёрдугаар байр"
            sub_title="1 төсөл"
            color="primeBlue"
            content="Гадаадад богино хугацааны чадавхжуулах сургалтад хамрагдах тэтгэлэг"
          />
          <Center>
            <Divider orientation="vertical" />
          </Center>
          <PackageTier
            sub_title="1 төсөл"
            title="Гуравдугаар байр"
            color="primeOrange"
            content="Гадаадад туршлага судлах аяллын тэтгэлэг"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
