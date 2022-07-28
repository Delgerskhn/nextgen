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
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { MENTOR } from "@ui/components/NavItem";
import { border, color } from "constant";

export const Mentor = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack mx="auto">
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
          <Button
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
          </Button>
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
          <Button
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
          </Button>
        </Box>
      </Stack>
      {/* {MENTOR.map((el, i) => {
          return (
            <Center key={i} py={12}>
              <Box
                role={"group"}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                pos={"relative"}
                zIndex={1}
                _hover={{
                  transition: ".3s",
                }}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  flexDirection="row"
                  height={"230px"}
                  justifyContent="center"
                >
                  <Image
                    height={230}
                    width={{ base: "full", lg: 282 }}
                    objectFit={"cover"}
                    src={el.image}
                  />
                </Box>
                <Stack
                  pt={10}
                  align={"center"}
                  p={5}
                  _hover={{
                    boxShadow: "var(--chakra-shadows-2xl)",
                    transition: "0.5s",
                  }}
                >
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    {el.profession}
                  </Text>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    {el.name}
                  </Heading>
                  <Text fontSize={"sm"}>
                    This is one of the team member slots
                  </Text>
                </Stack>
              </Box>
            </Center>
          );
        })} */}
    </Stack>
  );
};
