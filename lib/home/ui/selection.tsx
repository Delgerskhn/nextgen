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
        top={-10}
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
    <Container
      maxW={"5xl"}
      px={{ base: "10", md: "0" }}
      py={12}
      experimental_spaceY="20"
    >
      <Heading textAlign={"center"} size={"xl"} fontWeight="bold">
        {"Сонгон шалгаруулалт".toUpperCase()}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading textAlign={{ base: "center", md: "left" }}>
            Тавигдах шаардлага
          </Heading>
          <Image
            src="images/shaardlaga.png"
            display={{ base: "block", md: "none" }}
          />
          <Stack spacing={4} px={{ base: "5", sm: "10", md: 0 }}>
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
                text={" Mонгол Улсын иргэн байх"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"15-34 настай байх"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Олон нийтийн эрх ашигт нийцсэн байх"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Тухайн орон нутаг болон харьяа газартаа хэрэгжих боломжтой байх"
                }
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Төслийн үйл ажиллагаа ашиг сонирхлын зөрчилгүй байх"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Төслийн хүрэх үр дүн тодорхой, бодитой байх"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Төслийг цаашид үргэлжлүүлэх, өргөжүүлэн хэрэгжүүлэх боломжтой байх"
                }
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
        <Flex
          position={"relative"}
          display={{ base: "none", md: "block" }}
          direction="row"
        >
          <TransitionImage url={"images/shaardlaga.png"} is_right={true} />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex
          position={"relative"}
          display={{ base: "none", md: "block" }}
          direction="row"
        >
          <TransitionImage url={"images/process.png"} is_right={false} />
        </Flex>
        <Stack spacing={4}>
          <Heading textAlign={{ base: "center", md: "left" }}>
            ШАЛГАРУУЛАЛТ
          </Heading>
          <Image
            src="images/process.png"
            display={{ base: "block", md: "none" }}
          />
          <Stack spacing={4} px={{ base: "5", sm: "10", md: 0 }}>
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
                  "Монгол Улсын 21 аймаг, 9 дүүрэг тус бүрээс нэг төслийг сонгон шалгаруулна. Уралдаанд оролцогчид багаар ажиллах бөгөөд нэг баг 2-5 хүртэлх хүнтэй байна. "
                }
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={
                  "Төрийн, төрийн бус, хувийн хэвшлийн, олон улсын байгууллагын, орон нутгийн удирдлагагын зэрэг төлөөлөөлүүдээс бүрдсэн шүүгчдийн бүрэлдэхүүн зохион байгуулагчдын баталсан журмын дагуу  дараах шалгуураар төслийг үнэлж, сонгон шалгаруулна."
                }
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Шалгарсан төслийг 2022.09.28-ны өдөр зарлаж шалгарсан багуудад утас болон имэйлээр мэдэгдэнэ."
                }
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
