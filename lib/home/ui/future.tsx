import { Heading, Stack, Image } from "@chakra-ui/react";

export const Future = () => {
  return (
    <Stack
      experimental_spaceY={"10"}
      justifyContent="center"
      alignItems={"center"}
      background="#003366"
      py="24"
    >
      <Heading
        color={"white"}
        fontFamily={"NotoSans"}
        fontWeight="bold"
        size="3xl"
      >
        НАДААР ДУТНА
      </Heading>
      <Heading color={"white"} fontFamily={"NotoSans"} size="lg">
        Миний ирээдүй минийх
      </Heading>
      <Stack direction={"row"} justifyContent={"center"}>
        <Image
          src="https://static1.s123-cdn-static-a.com/ready_uploads/svg/normal_604d334b11e87.svg"
          width={"100%"}
        />
      </Stack>
    </Stack>
  );
};
