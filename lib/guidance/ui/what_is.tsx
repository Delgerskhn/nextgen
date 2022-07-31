import { Heading, Stack, Text } from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";
import { color } from "constant";

export const What = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack
      textAlign={"center"}
      px={{ base: "2%", md: "10%", lg: "20%" }}
      bgColor={color.white}
      py={20}
    >
      <Heading size="xl">
        “ШИНЭ СЭРГЭЛТ: NEXTGEN” ТӨСЛИЙН УРАЛДААН ГЭЖ ЮУ ВЭ?
      </Heading>
      <Text textAlign={"justify"} lineHeight={8} pt={3}>
        “ШИНЭ СЭРГЭЛТ: NEXTGEN” төслийн уралдаан нь Монгол Улсын иргэдийн аж
        амьдралд бодитоор тулгамдаж буй хөгжлийн асуудлуудыг залуучуудын
        оролцоо, бүтээлч санаачилга болон хамтын ажиллагаанд тулгуурлан оновчтой
        тодорхойлж, шийдлийг хэрэгжүүлэх төслийн уралдаан юм.{" "}
      </Text>
    </Stack>
  );
};
