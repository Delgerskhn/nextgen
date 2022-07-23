import {
  Flex,
  Box,
  HStack,
  useColorModeValue,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { NAV_ITEMS } from "./NavItem";

export const Footer = ({
  contentWidth = "container.xl",
}: {
  contentWidth?: string;
}) => {
  const variant = useLayoutBreakPointValue();
  return (
    <Flex as="footer">
      <Box w="full">
        <HStack
          h="full"
          borderTopWidth="1px"
          borderTopColor={useColorModeValue("gray.200", "gray.800")}
        >
          {/* <Box display={{ base: "none", lg: "flex" }} width={60} /> */}
          <Box
            flex="1"
            h="full"
            color={useColorModeValue("gray.200", "gray.800")}
            px={variant}
            py={5}
          >
            <Stack direction={"row"} justifyContent="center" spacing={70}>
              {NAV_ITEMS.map((el, i) => {
                return (
                  <Link fontSize={14} color={"gray.500"}>
                    {el.label}
                  </Link>
                );
              })}
            </Stack>
            <Stack direction="row" justifyContent={"center"} mt={5}>
              <Box textAlign={"center"} color={"gray.500"} fontSize={14}>
                <Text>Copyright © 2022 All Rights Reserved - Nextgen</Text>
                <Text>
                  Powered By <b> 3GROUP</b>
                </Text>
              </Box>
            </Stack>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};
