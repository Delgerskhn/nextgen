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
import { color } from "constant";
import { BsChevronRight } from "react-icons/bs";
import { NavItem, NAV_ITEMS } from "./NavItem";

export const DesktopNav = () => {
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
          border={0}
        >
          <Link
            outline={"none"}
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight="bold"
            color={color.white}
            _hover={{
              textDecoration: "none",
              color: color.orange,
            }}
            _focus={{ border: 0, outline: "none" }}
          >
            {navItem.label}
          </Link>
          <Divider
            opacity={1}
            style={{
              backgroundColor: color.orange,
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
