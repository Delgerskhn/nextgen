import {
  Box,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { border } from "constant";

export const Prohibition = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
      >
        <UnorderedList
          pt={{ base: "10", md: "0" }}
          textAlign={"left"}
          lineHeight={8}
          mr="10"
          textColor={"primeOrange"}
        >
          <ListItem>
            <Text textColor={"black"}>
              {" "}
              Тоног төхөөрөмж, тавилга хэрэгсэл худалдан авалт хийх
            </Text>
          </ListItem>
          <ListItem>
            {" "}
            <Text textColor={"black"}>Хандив, буяны арга хэмжээ </Text>
          </ListItem>
          <ListItem>
            <Text textColor={"black"}>
              Монгол Улсын хууль тогтоомжид нийцээгүй{" "}
            </Text>
          </ListItem>
        </UnorderedList>
        <Box
          bg={"primeOrange"}
          px={"10"}
          textAlign="center"
          py={10}
          maxW={{ base: "full", md: "35%" }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          rounded={"8px"}
          shadow="dark-lg"
          transition={"all"}
          transitionDuration={"1s"}
          _hover={{
            transform: "translate(-20px)",
          }}
        >
          <Heading
            color={"primeBlue"}
            fontSize="3xl"
            borderColor={"primeBlue"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ХАМРАГДАХ БОЛОМЖГҮЙ ТӨСӨЛ
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
};
