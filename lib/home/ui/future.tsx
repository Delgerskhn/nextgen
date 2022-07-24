import { Heading, Stack, Image } from "@chakra-ui/react";

export const Future = () => {
  return (
    <Stack
      experimental_spaceY={"10"}
      justifyContent="center"
      alignItems={"center"}
      background="#003366"
      py="10"
    >
      <Heading
        color={"white"}
        fontFamily={"NotoSans"}
        fontWeight="bold"
        size="xl"
      >
        НАДААР ДУТНА
      </Heading>
      <Heading color={"white"} fontFamily={"NotoSans"} size="md">
        Миний ирээдүй минийх
      </Heading>
      <Stack direction={"row"} justifyContent={"center"}>
        <Image
          src="https://static1.s123-cdn-static-a.com/ready_uploads/svg/normal_604d334b11e87.svg"
          width={"70%"}
        />
      </Stack>
    </Stack>
  );
};
