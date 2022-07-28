import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { MENTOR } from "@ui/components/NavItem";

export const Mentor = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack mx={value} mt={20}>
      <Heading textAlign={"center"} size="xl">
        Mentor/Хөтөч
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacingX={5} pt={5}>
        {MENTOR.map((el, i) => {
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
        })}
      </SimpleGrid>
    </Stack>
  );
};
