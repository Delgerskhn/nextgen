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
import { border, color } from "constant";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
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
type TransitionImageProps = {
  url: string;
  is_right: boolean;
};
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <ListItem color={"primeOrange"}>
      {" "}
      <Text color="black">{text}</Text>
    </ListItem>
  );
};

const TransitionImage = ({ url, is_right }: TransitionImageProps) => {
  const [is_show, setShow] = useState(false);
  return (
    <>
      <Stack
        bg="#003366"
        h="full"
        w="full"
        transition="ease"
        transitionDuration={".3s"}
        transform={`${
          is_show &&
          (is_right ? "translate(-10px, 10px)" : "translate(10px, -10px)")
        }`}
      />
      <Image
        position={"absolute"}
        // rounded={"md"}
        alt={"feature image"}
        src={url}
        objectFit={"cover"}
        w={"full"}
        h={{ base: 200, md: "full" }}
        borderRadius={0}
        transition="ease"
        transitionDuration={".3s"}
        onMouseEnter={(e) => {
          setShow(true);
          e.currentTarget.style.transform = is_right
            ? "translate(10px , -10px)"
            : "translate(-10px , 10px)";
        }}
        onMouseLeave={(e) => {
          setShow(false);
          e.currentTarget.style.transform = "translate(0px , 0px)";
        }}
      />
    </>
  );
};

export const Selection = () => {
  const [is_show, setShow] = useState(false);
  const router = useRouter();
  return (
    <Container maxW={"5xl"} py={12} experimental_spaceY="16">
      <Heading textAlign={"center"} size={"xl"} fontWeight="bold">
        {"Сонгон шалгаруулалт".toUpperCase()}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Тавигдах шаардлага</Heading>
          <Stack spacing={4}>
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
              color={color.primary}
              bgColor={"transparent"}
              fontWeight={"bold"}
              borderColor={color.primary}
              borderWidth={2}
              rounded={border.button_border_radius}
              width={"fit-content"}
              _focus={{}}
              _hover={{
                background: color.primary,
                color: color.white,
              }}
              onClick={() => router.push("/guidance")}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Stack>
        <Flex position={"relative"} direction="row">
          <TransitionImage url={"/meeting.png"} is_right={true} />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex position={"relative"} direction="row">
          <TransitionImage url={"/scholarship.png"} is_right={false} />
        </Flex>
        <Stack spacing={4}>
          <Heading>Үйл явц</Heading>
          <Stack spacing={4}>
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
                  "Ирүүлсэн бүх асуудлыг харьяа аймаг, дүүрэг нь хариуцан авч баталгаажуулах"
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
              bg="transparent"
              color={color.primary}
              fontWeight={"bold"}
              borderColor={color.primary}
              borderWidth={2}
              rounded={border.button_border_radius}
              width={"fit-content"}
              _focus={{}}
              _hover={{
                background: color.primary,
                color: color.white,
              }}
              onClick={() => router.push("/guidance")}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
