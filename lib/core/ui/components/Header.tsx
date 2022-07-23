import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { AiOutlineUser } from "react-icons/ai";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const variant = useLayoutBreakPointValue();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 5 }}
        px={variant}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex justify={{ base: "center", md: "start" }} flex={0}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"Helvetica"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
        </Flex>
        <Stack direction={"row"} spacing={16}>
          <DesktopNav />
          <IconButton
            size={"sm"}
            as={AiOutlineUser}
            bg="transparent"
            variant={"ghost"}
            onClick={() => {}}
            aria-label={"User auth"}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
