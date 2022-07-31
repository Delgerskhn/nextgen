import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { border, color } from "constant";

export const Goal = () => {
  return (
    <Stack px={{ base: "2%", lg: "20%" }} py={"20"}>
      <Box direction="row" display={"flex"}>
        <Box
          bg={color.orange}
          px={"20"}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          rounded={border.button_border_radius}
          shadow="dark-lg"
          transition={"all"}
          transitionDuration={"1s"}
          _hover={{
            transform: "translate(20px)",
          }}
        >
          <Heading
            color={color.primary}
            fontSize="5xl"
            borderColor={color.primary}
            borderWidth={10}
            borderLeft={0}
            borderRight={0}
            borderStyle="dashed"
            py={2}
          >
            Зорилго
          </Heading>
        </Box>
        <Text textAlign={"justify"} lineHeight={8} ml="10">
          “Алсын хараа 2050” урт хугацааны хөгжлийн бодлого болон түүний эхний
          10 жилийн дунд хугацааны хөгжлийн бодлого болох “Шинэ сэргэлтийн
          бодлого”-ын хүрээнд нийгэмд тулгамдаж буй хөгжлийн асуудлуудыг
          шийдвэрлэхэд залуучуудын дуу хоолой, үзэл бодол, бүтээлч санаачилга,
          шийдлийг дэмжиж, чадавхжуулахад оршино.{" "}
        </Text>
      </Box>
    </Stack>
  );
};
