import { Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { useLayoutBreakPointValue } from "@lib/core/data/layout_break_point_value";

export const Partner = () => {
  let value = useLayoutBreakPointValue();
  return (
    <Stack
      px={value}
      style={{ background: "white" }}
      py="10"
      pb="20"
      alignItems={"center"}
    >
      <Heading size="xl" mb={20} textAlign="center">
        Хамтрагч байгууллага
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="40">
        <Image src="/govern.png" w={200} />
        <Image src="/government.png" w={200} />
        <Image src="/shsbht.png" w={200} />
        <Image src="/council.png" w={200} />
      </SimpleGrid>
    </Stack>
  );
};
