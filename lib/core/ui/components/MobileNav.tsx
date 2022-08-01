import {
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Link,
  Flex,
  Icon,
  Collapse,
  Box,
  Divider,
} from "@chakra-ui/react";
import { color } from "constant";
import { BsChevronDown } from "react-icons/bs";
import { NAV_ITEMS, NavItem } from "./NavItem";

type Props = {
  is_open: boolean;
};
export const MobileNav = ({ is_open }: Props) => {
  return (
    <Stack
      bg={"primeOrange"}
      p={is_open ? 4 : 0}
      h={{ base: is_open ? "250" : "0px" }}
      display={{ base: "block", md: "none" }}
      transition=".3s"
      overflow={"hidden"}
      spacing="7"
      px={{ base: "5%", md: "10%" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          className="active-menu-item"
          position={"relative"}
          width={"fit-content"}
          border={0}
        >
          <Link
            outline={"none"}
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight="bold"
            color={"#fff"}
            _hover={{
              textDecoration: "none",
              color: color.primary,
            }}
            _focus={{ border: 0, outline: "none" }}
          >
            {navItem.label}
          </Link>
          <Divider
            opacity={1}
            bg="primeBlue"
            // style={{
            //   backgroundColor: "#",
            // }}
            h={1}
            bottom={-2}
            position="absolute"
          />
        </Box>
      ))}
    </Stack>
  );
};
