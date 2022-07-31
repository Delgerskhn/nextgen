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
    <Stack px="20%" pt="20" bg="#fff">
      <Heading textAlign={"center"} size="xl">
        МЕНТОР БОЛОН ХӨТӨЧҮҮД
      </Heading>
      <Stack
        px={{ base: 0, sm: 10 }}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        w="full"
        py={16}
        experimental_spaceX={"20"}
      >
        <Box
          experimental_spaceY={5}
          flexDirection="column"
          display={"flex"}
          alignItems={"center"}
          w={"md"}
        >
          <Image src={"/meeting.png"} w={300} />
          <Heading color={color.orange}>Mentors</Heading>
          <Text textAlign={"justify"} fontSize="sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
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
          w={"md"}
          pt={{ base: 20, md: 0 }}
          experimental_spaceY={5}
          flexDirection="column"
          display={"flex"}
          alignItems={"center"}
        >
          <Image src={"/meeting.png"} w={300} />
          <Heading color={color.primary}>Хөтөч</Heading>
          <Text textAlign={"justify"} fontSize="sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
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
