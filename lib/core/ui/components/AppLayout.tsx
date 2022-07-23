import { ReactNode, useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  LinkBox,
  Text,
  HStack,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from "@ui/index";
import { useCurrentUser } from "@lib/auth/data/authHooks";
import { Logo } from "./Logo";
// import { MobileHamburgerMenu } from "./navigation/MobileHamburgerMenu";
// import { NavMenu } from "./navigation/NavMenu";
import { LanguageDropdown } from "./navigation/LanguageDropdown";
import { NotificationDropdown } from "./navigation/NotificationDropdown";
import { ThemeToggler } from "./navigation/ThemeToggler";
// import { useMobileMenuState } from "./navigation/useMobileMenuState";
import { TopRightMenu } from "./navigation/TopRightMenu";
import { Footer } from "./Footer";

const roleToRootUrl = {
  STUDENT: "/",
  TEACHER: "/",
  ADMIN: "/",
};

export const AppLayout = ({
  title = "",
  contentWidth = "container.xl",
  children,
}: {
  title?: string;
  contentWidth?: string;
  children?: ReactNode;
}) => {
  // const { isMenuOpen, toggle } = useMobileMenuState();
  const { user, isLoggedIn } = useCurrentUser();
  const [rootUrl, setRootUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    setRootUrl(roleToRootUrl[user?.role as keyof typeof roleToRootUrl]);
  }, [user]);

  return (
    <>
      <Header />
      <Box as="main" display="flex" px="6">
        <Box maxW={contentWidth} mx="auto" w="full">
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};
