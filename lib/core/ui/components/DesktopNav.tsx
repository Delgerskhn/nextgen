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
  Badge,
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
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
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
            </PopoverTrigger>

            <Divider
              opacity={1}
              style={{
                backgroundColor: color.orange,
              }}
              h={1}
              bottom={-2}
              position="absolute"
            />
            {navItem?.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                {navItem.children.map((el, i) => {
                  return (
                    <Stack>
                      <DesktopSubNav key={i} {...el} />
                    </Stack>
                  );
                })}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      textDecoration="none"
      // _hover={{ bg: "primeBlue" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box textDecoration={"none"} border={0}>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "primeOrange" }}
            color="primeBlue"
            textDecoration={"none"}
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
          <Icon color={"primeOrange"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};
