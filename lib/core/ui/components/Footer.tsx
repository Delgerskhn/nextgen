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
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
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
    <Flex as="footer" w={"80%"} mx="auto" mt={10}>
      <Box w="full">
        <HStack
          h="full"
          w={{ base: "full" }}

          // bg="#013365"
        >
          {/* <Box display={{ base: "none", lg: "flex" }} width={60} /> */}
          <Box
            flex="1"
            h="full"
            color={useColorModeValue("gray.200", "gray.800")}
            px={variant}
            py={5}
          >
            <SimpleGrid
              direction="row"
              justifyContent="space-between"
              columns={{ base: 1, md: 3 }}
            >
              <Stack direction={"column"} justifyContent="" spacing={4}>
                <Heading size="xs" color={"black"}>
                  Холбоосууд
                </Heading>
                {NAV_ITEMS.map((el, i) => {
                  return (
                    <Link
                      key={i}
                      fontSize={14}
                      fontWeight="bold"
                      color={"#003366"}
                    >
                      {el.label}
                    </Link>
                  );
                })}
              </Stack>
              <Stack direction={"column"} justifyContent="" spacing={4}>
                <Heading size="xs" color={"black"}>
                  Холбоо барих
                </Heading>

                {FOOTER.CONTACT.map((el, i) => {
                  return (
                    <Stack key={i} alignItems={"center"} flexDirection={"row"}>
                      <Icon as={el.icon} color={"black"} />
                      <Text
                        style={{ marginTop: 0, marginLeft: 10 }}
                        color={"black"}
                      >
                        {el.value}
                      </Text>
                    </Stack>
                  );
                })}
              </Stack>
              <Stack>
                <Heading size="xs" color={"black"}>
                  Сошиал хаягууд
                </Heading>
                <Stack direction="row">
                  {FOOTER.SOCIAL.map((el, i) => {
                    return (
                      <Box
                        key={i}
                        bg={el.bg}
                        p={2}
                        px={3}
                        alignItems="center"
                        justifyContent={"center"}
                        flexDirection="row"
                        cursor={"pointer"}
                        display={"flex"}
                      >
                        <Icon as={el.icon} color="white" fontSize={20} />
                      </Box>
                    );
                  })}
                </Stack>
                <Text fontSize={"xs"} color={"black"}>
                  Шинэ сэргэлт (NextGen) залуучуудын төслийн уралдаан нь Монгол
                  Улсын иргэдийн аж амьдралд бодитоор тулгамдаж буй хөгжлийн
                  асуудлуудыг залуучуудын оролцоо, бүтээлч санаачилга болон
                  хамтын ажиллагаанд тулгуурлан оновчтой тодорхойлж, шийдлийг
                  хэрэгжүүлэх төслийн уралдаан бөгөөд чадавхжуулах арга хэмжээ
                  юм.
                </Text>
              </Stack>
            </SimpleGrid>
            <Stack
              direction="row"
              textColor={"#003366"}
              mt={5}
              py={10}
              pb={5}
              fontSize="sm"
            >
              <Text>Copyright © 2022 All Rights Reserved - Nextgen</Text>
              <Text>
                Powered By <b> 3GROUP</b>
              </Text>
            </Stack>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};
