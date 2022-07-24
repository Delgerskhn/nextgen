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
    <Stack direction={"row"} alignItems="center" spacing={30}>
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
          {/* <Divider
            className={"active-menu-item mt-2"}
            borderWidth={1}
            w={0}
            borderRadius={10}
            __css={{}}
          /> */}

          {/* {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )} */}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};
