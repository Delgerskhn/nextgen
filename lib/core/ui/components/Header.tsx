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
import { useAuth } from "@lib/auth/ui";
import { ProfileDropdown } from "./navigation/ProfileDropdown";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const variant = useLayoutBreakPointValue();
  const router = useRouter();
  const { isLoggedIn, data } = useAuth();
  const routes = ["/", "/guidance"];
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      bg={
        routes.findIndex((r) => r == router.pathname) != -1
          ? "transparent"
          : "primeBlue"
      }
      position={
        routes.findIndex((r) => r == router.pathname) != -1
          ? "absolute"
          : "relative"
      }
      w="full"
    >
      <Flex
        py={{ base: 5 }}
        px={variant}
        align={"center"}
        justifyContent={"space-between"}
        alignItems="flex-end"
      >
        {!isMobile && (
          <Flex alignItems={"center"}>
            <Link href="/">
              <Image src="/logo.png" w="24" />
            </Link>
          </Flex>
        )}
        <Stack
          direction={"row"}
          spacing={10}
          justify={{ base: "space-between", lg: "flex-end" }}
          w="full"
        >
          <IconButton
            size={"sm"}
            as={FiMenu}
            bg="transparent"
            display={{ base: "block", lg: "none" }}
            cursor={"pointer"}
            color="primeOrange"
            variant={"unstyled"}
            onClick={onToggle}
            _hover={{
              color: "#fff",
            }}
            aria-label={"User auth"}
          />
          <DesktopNav />
          {isLoggedIn ? (
            data && <ProfileDropdown user={data} />
          ) : (
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
          )}
        </Stack>
      </Flex>
      <MobileNav is_open={isOpen} />
    </Box>
  );
};
