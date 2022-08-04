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
        <Box
          bg={"primeBlue"}
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
            color={"primeOrange"}
            fontSize="3xl"
            borderColor={"primeOrange"}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            ХАМРАГДАХ БОЛОМЖГҮЙ ТӨСӨЛ
          </Heading>
        </Box>
        <UnorderedList
          pt={{ base: "10", md: "0" }}
          textAlign={"left"}
          lineHeight={8}
          pl="10"
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
      </Stack>
    </Stack>
  );
};
