import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
  Image,
  Stack,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { AiOutlineUser } from "react-icons/ai";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { useRouter } from "next/router";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const variant = useLayoutBreakPointValue();
  const router = useRouter();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 5 }}
        px={variant}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex alignItems={"center"}>
          <Image src="/logo.png" w="14" />
        </Flex>
        <Stack direction={"row"} spacing={10}>
          <DesktopNav />
          <IconButton
            size={"sm"}
            as={AiOutlineUser}
            bg="transparent"
            cursor={"pointer"}
            color="black"
            variant={"unstyled"}
            onClick={() => {
              router.push("/account/profile");
            }}
            _hover={{
              color: "#003366",
            }}
            aria-label={"User auth"}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
