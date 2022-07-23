import { ReactNode, useEffect, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useCurrentUser } from "@lib/auth/data/authHooks";
import { Header } from "./Header";
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
      {children}
      <Footer />
    </>
  );
};
