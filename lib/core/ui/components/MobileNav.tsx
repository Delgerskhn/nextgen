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
import { BsChevronDown } from "react-icons/bs";
import { NAV_ITEMS, NavItem } from "./NavItem";

type Props = {
  is_open: boolean;
};
export const MobileNav = ({ is_open }: Props) => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ base: is_open ? "block" : "none", lg: "none" }}
      transition=".3s"
      overflow={"hidden"}
      spacing="7"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          className="active-menu-item"
          key={navItem.label}
          position={"relative"}
          width={"fit-content"}
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

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
