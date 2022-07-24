import {
  Heading,
  Stack,
  UnorderedList,
  Image,
  ListItem,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue,
  StackDivider,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return <ListItem fontWeight={600}>{text}</ListItem>;
};

export const Selection = () => {
  return (
    <Container maxW={"5xl"} py={12} experimental_spaceY="40">
      <Heading textAlign={"center"} size={"xl"}>
        Сонгон шалгаруулалт
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Тавигдах шаардлага</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <UnorderedList lineHeight={8}>
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"15-34 насны Mонгол Улсын иргэн"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={
                  "Өөрийн аймаг, дүүрэгт тулгарсан нэг асуудлыг шийдэлтэй нь танилцуулах"
                }
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"3.5 сарын туршид хөтөлбөрт оролцох боломжтой"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Цахимаар харилцаа холбоо тогтоох боломжтой"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"5-7 хүнтэй баг болон оролцож болно"}
              />
            </UnorderedList>
            <Button
              bg="#003366"
              color={"white"}
              fontWeight={"bold"}
              borderRadius={0}
              width={"fit-content"}
              _focus={{
                backgroundColor: "transparent",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/meeting.png"}
            objectFit={"cover"}
            borderRadius={0}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/scholarship.png"}
            objectFit={"cover"}
            borderRadius={0}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading>Үйл явц</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <UnorderedList lineHeight={8}>
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={
                  "21 аймаг, 9 дүүргийн засаг даргатай хамтран хөтөлбөр хариуцах баг бүрдүүлэн ажиллах"
                }
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={
                  "Ирүүлсэн бүх асуудлыг харъяа аймаг, дүүрэг нь хариуцан авч баталгаажуулах"
                }
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Аль болох захын хорооллын, хязгаарлагдмал боломжтой залуучуудыг туршлага харгалзахгүйгээр хамруулах"
                }
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Сонгон шалгаруулалтын хугацаа 21 хоног"}
              />
            </UnorderedList>
            <Button
              bg="#003366"
              color={"white"}
              fontWeight={"bold"}
              borderRadius={0}
              width={"fit-content"}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
