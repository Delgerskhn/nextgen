import {
  Flex,
  Box,
  HStack,
  useColorModeValue,
  Text,
  Stack,
  Link,
  Icon,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { color } from "constant";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FOOTER, NAV_ITEMS } from "./NavItem";

export const Footer = ({
  contentWidth = "container.xl",
}: {
  contentWidth?: string;
}) => {
  const variant = useLayoutBreakPointValue();
  return (
    <Flex
      as="footer"
      w={"full"}
      mx="auto"
      pt={14}
      bg={color.primary}
      backgroundImage={{ base: "", md: "url('footer_icon/hand.png')" }}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={{ base: "right bottom" }}
      backgroundSize={{ base: "50%", md: "25%", xl: "22%" }}
      style={{
        backgroundPositionX: "90%",
      }}
    >
      <Box w="full">
        <HStack h="full" w={{ base: "full" }}>
          <Box flex="1" h="full" px={variant} py={5}>
            <SimpleGrid
              direction="row"
              justifyContent="space-between"
              columns={{ base: 1, md: 4 }}
            >
              <Stack direction={"row"} experimental_spaceX={10}>
                <Image src="footer_icon/children.png" h={70} />
                <Image src="footer_icon/revival.png" h={70} />
              </Stack>
              <Stack
                direction={"column"}
                justifyContent=""
                spacing={4}
                mt={{ base: 10, md: 0 }}
              >
                <Heading size="sm" color={color.white}>
                  Холбоосууд
                </Heading>
                {NAV_ITEMS.map((el, i) => {
                  return (
                    <Link fontSize={14} fontWeight="bold" color={color.white}>
                      {el.label}
                    </Link>
                  );
                })}
              </Stack>
              <Stack
                direction={"column"}
                justifyContent=""
                spacing={4}
                mt={{ base: 10, md: 0 }}
              >
                <Heading size="sm" color={color.white}>
                  Холбоо барих
                </Heading>

                {FOOTER.CONTACT.map((el, i) => {
                  return (
                    <Stack key={i} alignItems={"center"} flexDirection={"row"}>
                      <Icon as={el.icon} color={color.white} />
                      <Text
                        style={{ marginTop: 0, marginLeft: 10 }}
                        color={color.white}
                      >
                        {el.value}
                      </Text>
                    </Stack>
                  );
                })}
              </Stack>
              <Stack mt={{ base: 10, md: 0 }}>
                <Heading size="sm" color={color.white}>
                  Сошиал хаягууд
                </Heading>
                <Stack direction="row">
                  {FOOTER.SOCIAL.map((el, i) => {
                    return (
                      <Box
                        key={i}
                        bg={color.white}
                        p={3}
                        alignItems="center"
                        justifyContent={"center"}
                        flexDirection="row"
                        cursor={"pointer"}
                        display={"flex"}
                        rounded="full"
                      >
                        <Icon as={el.icon} color={el.bg} fontSize={20} />
                      </Box>
                    );
                  })}
                </Stack>
              </Stack>
            </SimpleGrid>
            <Stack
              direction="row"
              justifyContent={"center"}
              textColor={color.white}
              mt={5}
              py={10}
              pb={5}
              fontSize="sm"
            >
              <Text>2022 NEXT GEN MNL All Rights Reserved.</Text>
            </Stack>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};
