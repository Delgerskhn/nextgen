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
      <Box direction="row" display={"flex"} alignItems="center">
        <UnorderedList textAlign={"left"} lineHeight={8} mr="10">
          <ListItem>
            Тоног төхөөрөмж, тавилга хэрэгсэл худалдан авалт хийх
          </ListItem>
          <ListItem>Хандив, буяны арга хэмжээ </ListItem>
          <ListItem>Монгол Улсын хууль тогтоомжид нийцээгүй</ListItem>
        </UnorderedList>
        <Box
          bg={"primeOrange"}
          px={"20"}
          py={10}
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
            fontSize="4xl"
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
      </Box>
    </Stack>
  );
};
