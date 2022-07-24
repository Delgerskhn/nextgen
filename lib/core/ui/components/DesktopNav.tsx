import {
  useColorModeValue,
  Text,
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  Link,
  PopoverContent,
  Flex,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { NavItem, NAV_ITEMS } from "./NavItem";

export const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack
      direction={"row"}
      display={{ base: "none", lg: "flex" }}
      alignItems="center"
      spacing={30}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          className="active-menu-item"
          position={"relative"}
        >
          <Link
            outline={"none"}
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight="bold"
            color={"black"}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
            _focus={{ border: 0, outline: "none" }}
          >
            {navItem.label}
          </Link>
          <Divider
            opacity={1}
            style={{
              backgroundColor: "#003366",
            }}
            h={1}
            bottom={-2}
            position="absolute"
          />
        </Box>
      ))}
    </Stack>
  );
};
