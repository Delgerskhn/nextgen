import { Flex, Box, HStack, useColorModeValue, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = ({
  contentWidth = "container.xl",
}: {
  contentWidth?: string;
}) => {
  return (
    <Flex as="footer">
      <Box maxW={contentWidth} mx="auto" w="full">
        <HStack h="full">
          <Box display={{ base: "none", lg: "flex" }} width={60} />
          <Box
            flex="1"
            h="full"
            color={useColorModeValue("gray.200", "gray.800")}
            borderTopWidth="1px"
            borderTopColor={useColorModeValue("gray.200", "gray.800")}
            p={6}
          >
            <Text as="span">Footer</Text>
            <Link href="/privacy-policy" passHref>
              <Box as="a" textDecoration="underline" mx={2}>
                <Text as="span">privacy policy</Text>
              </Box>
            </Link>
            •
            <Link href="/terms-of-service" passHref>
              <Box as="a" textDecoration="underline" mx={2}>
                <Text as="span">terms of service</Text>
              </Box>
            </Link>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};
