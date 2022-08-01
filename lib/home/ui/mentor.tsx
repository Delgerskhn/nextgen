import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Image,
  Text,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { MENTOR } from "@ui/components/NavItem";
import { border, color } from "constant";

export const Mentor = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack px={{ base: "0%", md: "20%" }} pt="20" bg="#fff">
      <Heading textAlign={"center"} size="xl">
        МЕНТОР БОЛОН СУРГАГЧ БАГШ
      </Heading>
      <Stack
        px={{ base: 5, sm: 10 }}
        direction={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        w="full"
        py={16}
        experimental_spaceX={{ base: "0", lg: "20" }}
      >
        <Box
          experimental_spaceY={5}
          flexDirection="column"
          display={"flex"}
          alignItems={"center"}
          w={{ base: "full", md: "md" }}
        >
          <Image src={"images/Mentors.png"} w={300} />
          <Heading color={color.orange}>Mentors</Heading>
          <Text h="32">
            Ментор нь багийн төслийн явц байдал, хэрэгжилттэй 2 долоо хоног
            тутам танилцан, зөвлөж ажиллана.
          </Text>
          <Tooltip label="Тун удахгүй" fontSize={"md"}>
            {/* <Button
            color={color.primary}
            bgColor={"transparent"}
            fontWeight={"bold"}
            borderColor={color.primary}
            borderWidth={2}
            rounded={border.button_border_radius}
            width={"xs"}
            _focus={{}}
            _hover={{
              background: color.primary,
              color: color.white,
            }}
            // onClick={() => router.push("/guidance")}
          >
              Дэлгэрэнгүй
          </Button> */}
            <Stack>
              <Text
                color={color.primary}
                bgColor={"transparent"}
                cursor="no-drop"
                fontWeight={"bold"}
                borderColor={color.primary}
                borderWidth={2}
                rounded={border.button_border_radius}
                width={"xs"}
                py={1.5}
                textAlign="center"
              >
                Дэлгэрэнгүй
              </Text>
            </Stack>
          </Tooltip>
        </Box>
        <Box
          w={{ base: "full", md: "md" }}
          pt={{ base: 20, lg: 0 }}
          experimental_spaceY={5}
          flexDirection="column"
          display={"flex"}
          alignItems={"center"}
        >
          <Image src={"images/Hutuch.png"} w={300} />
          <Heading color={color.primary}>Сургагч багш</Heading>
          <Text h="32">
            Сургагч багш нь төслийн багтай байнгын холбоотой байх бөгөөд төслийн
            агуулгын болон зохион байгуулалтын шаардлагатай дэмжлэг туслалцааг
            үзүүлнэ.
          </Text>
          <Tooltip label="Тун удахгүй" fontSize={"md"}>
            {/* <Button
              disabled
              color={color.primary}
              bgColor={"transparent"}
              fontWeight={"bold"}
              borderColor={color.primary}
              borderWidth={2}
              rounded={border.button_border_radius}
              width={"xs"}
              _focus={{}}
              // _hover={{
              //   background: color.primary,
              //   color: color.white,
              // }}
              // onClick={() => router.push("/guidance")}
            >
              Дэлгэрэнгүй
            </Button> */}
            <Stack>
              <Text
                color={color.primary}
                bgColor={"transparent"}
                cursor="no-drop"
                fontWeight={"bold"}
                borderColor={color.primary}
                borderWidth={2}
                rounded={border.button_border_radius}
                width={"xs"}
                py={1.5}
                textAlign="center"
              >
                Дэлгэрэнгүй
              </Text>
            </Stack>
          </Tooltip>
        </Box>
      </Stack>
    </Stack>
  );
};
