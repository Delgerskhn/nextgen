import {
  Box,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const Target = () => {
  return (
    <Box>
      <Box
        maxW={"container.xl"}
        mx="auto"
        w="full"
        textAlign="center"
        py={10}
        px={6}
        bg={useColorModeValue("gray.100", "gray.700")}
      >
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>Зорилт</Heading>
            <Text>Залуу хүн бүрт хүртээмжтэй байх</Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Нээлттэй оролцох боломж</TestimonialHeading>
                <TestimonialText>
                  Улс орон даяар, 21 аймаг болон Улаанбаатар хотын бүх дүүргийн
                  хэмжээнд залуучуудын туршлагыг үл харгалзан нээлттэй оролцох
                  боломжийг бүрдүүлэх
                </TestimonialText>
              </TestimonialContent>
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Асуудлыг илрүүлэх</TestimonialHeading>
                <TestimonialText>
                  Ард түмний санаа зовнисон асуудал бүрийг залуучуудын
                  оролцоотойгоор нээн илрүүлэх
                </TestimonialText>
              </TestimonialContent>
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Шийдлээ хэрэгжүүлэх</TestimonialHeading>
                <TestimonialText>
                  Aсуудлын шийдлийг залуучууд өөрсдөө олж хэрэгжүүлэхээс гадна
                  хөтөлбөрийн явцад сургалтад хамрагдан чадавхаа дээшлүүлнэ
                </TestimonialText>
              </TestimonialContent>
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};
