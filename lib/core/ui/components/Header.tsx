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
  Link,
} from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { AiOutlineUser } from "react-icons/ai";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { border, color } from "constant";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const variant = useLayoutBreakPointValue();
  const router = useRouter();
  return (
    <Box bg="transparent" position={"absolute"} w="full">
      <Flex
        minH={"60px"}
        py={{ base: 5 }}
        px={variant}
        align={"center"}
        justifyContent={"space-between"}
        alignItems="flex-end"
      >
        <Flex alignItems={"center"}>
          <Link href="/">
            <Image src="/logo.png" w="24" />
          </Link>
        </Flex>
        <Stack direction={"row"} spacing={10}>
          <IconButton
            size={"sm"}
            as={FiMenu}
            bg="transparent"
            display={{ base: "block", lg: "none" }}
            cursor={"pointer"}
            color="black"
            variant={"unstyled"}
            onClick={onToggle}
            _hover={{
              color: "#003366",
            }}
            aria-label={"User auth"}
          />
          <DesktopNav />
          <Button
            bg={color.orange}
            _hover={{}}
            as="a"
            href={"/auth/login"}
            _focus={{}}
            borderRadius={border.button_border_radius}
            textColor={color.white}
          >
            Нэвтрэх
          </Button>
        </Stack>
      </Flex>
      <MobileNav is_open={isOpen} />
    </Box>
  );
};
