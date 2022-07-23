import { ReactElement } from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import { FlipBox } from "@ui/Flipbox";

export const ProjectTimeline = () => {
  return (
    <Box maxW={"container.xl"} mx="auto" w="full">
      <VStack>
        <Heading size="xl" mt="16" mb="6">
          Үе шатууд
        </Heading>
        <SimpleThreeColumns />
      </VStack>
    </Box>
  );
};

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      bg="gray.50"
      rounded={"md"}
      border={"1px solid "}
      borderColor="yellow.700"
      boxShadow="xl"
      p="6"
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon color="gray.600" as={RiNumber1} w={10} h={10} />}
          title={"Сонгон шалгаруулалт"}
          text={`Оролцогчдыг сонгон 
            шалгаруулхад харьяа 
            аймаг, дүүргийн ЗДТГ 
            болон Залуучуудын 
            агентлагуудтай 
            ажиллах`}
        />
        <Feature
          icon={<Icon color="gray.600" as={RiNumber2} w={10} h={10} />}
          title={"Асуудлыг задлан шинжлэх"}
          text={
            "Ирүүлсэн асуудалд дүн шинжилгээ хийх. Problem diagnostic. System analysis."
          }
        />
        <Feature
          icon={<Icon color="gray.600" as={RiNumber3} w={10} h={10} />}
          title={"Шийдлийг бататгах"}
          text={`Шийдлээ баталгаажуулж бүрэн хэмжээний 
            төсөл боловсруулж 
            хөрөнгө босгоно.`}
        />
        <Feature
          icon={<Icon color="gray.600" as={RiNumber4} w={10} h={10} />}
          title={"Шийдлийг хэрэгжүүлэх"}
          text={
            "Төслийг хэрэгжүүлж явцыг Web Portal үүсгэн хянаж явцын тайлан тавьна."
          }
        />
        <Feature
          icon={<Icon color="gray.600" as={RiNumber5} w={10} h={10} />}
          title={"Дүгнэлт"}
          text={`Шилдэг төслийг 
            шалгаруулан 
            хаалтын арга 
            хэмжээ зохион 
            байгуулах.`}
        />
      </SimpleGrid>
    </Box>
  );
}
