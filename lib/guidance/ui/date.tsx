import { Heading, Icon, Stack } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

export const DateComp = () => {
  return (
    <Stack py={20}>
      <Heading size={"xl"} textAlign="center">
        ХЭРЭГЖҮҮЛЭХ ХУГАЦАА:
      </Heading>
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems={"center"}
        pt={10}
      >
        <Heading
          textColor={"deepGreen"}
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        >
          2022.08.01
        </Heading>
        <Icon fontSize={"5xl"} color="primeBlue" as={BiRightArrow} />
        <Heading
          textColor={"primeOrange"}
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        >
          {" "}
          2022.12.30
        </Heading>
      </Stack>
    </Stack>
  );
};
