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
const PackageTier = ({ color, title, content }: PackageTierProps) => {
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
        <Text textAlign={"center"}>{content}</Text>
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
            <Heading size={"xl"}>ШАГНАЛ УРАМШУУЛАЛ</Heading>
            <Heading fontSize={"9xl"} py={5} color={"deepGreen"}>
              20,000,000₮
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Төслийн тайлан хурал зохион байгуулж шилдэг төслүүдийг шалгаруулан
              дараах байдлаар урамшуулна
            </Text>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent="space-between">
          <PackageTier
            sub_title="Гран при төсөл"
            title="Нэгдүгээр байр"
            color="primeOrange"
            content="Гадаадад магистрын түвшинд суралцах сургалтын тэтгэлэг"
          />
          <Center>
            <Divider orientation="vertical" bg="black" />
          </Center>

          <PackageTier
            title="Хоёрдугаар байр"
            sub_title="1 төсөл"
            color="brown"
            content="Гадаадад богино хугацааны чадавхжуулах сургалтад хамрагдах тэтгэлэг"
          />
          <Center>
            <Divider orientation="vertical" />
          </Center>
          <PackageTier
            sub_title="1 төсөл"
            title="Гуравдугаар байр"
            color="silver"
            content="Гадаадад туршлага судлах аяллын тэтгэлэг"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
