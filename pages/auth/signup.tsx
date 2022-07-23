import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  useColorModeValue,
  Input,
  Link,
  Stack,
  Image,
  Box,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useSignup } from "@lib/auth/data/authHooks";
import { toaster } from "@ui/index";
import { Header } from "@ui/components/Header";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsToggleOff } from "react-icons/bs";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { SignupInput } from "@lib/auth/data/types";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const signupMutation = useSignup();
  const { t: ta } = useTranslation("auth");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>();

  const onSubmit = handleSubmit((authInput) => {
    signupMutation.mutate(authInput, {
      onError: (error: any) => {
        toaster.error(ta(error.translationKey));
      },
      onSuccess: (user) => {
        //onst nextPath: string = router.query.redirectTo
        // ? router.query.redirectTo.toString()
        // : defaultPaths[user.role];
        router.push("/");
      },
    });
  });
  return (
    <>
      <Header />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    id="firstName"
                    isRequired
                    isInvalid={!!errors.firstName}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      {...register("firstName", {
                        required: "This is required",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isInvalid={!!errors.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      {...register("lastName", {
                        required: "This is required",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isRequired
                isInvalid={!!errors.password}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    {...register("password", {
                      required: "This is required",
                      minLength: {
                        value: 8,
                        message: "Minimum length should be 8",
                      },
                    })}
                  />
                  <InputRightElement>
                    <IconButton
                      bg="transparent !important"
                      variant="ghost"
                      aria-label={
                        showPassword ? "Mask password" : "Reveal password"
                      }
                      icon={showPassword ? <HiEyeOff /> : <HiEye />}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  onClick={onSubmit}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/auth/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Flex
          flex={1}
          backgroundPosition="center"
          backgroundRepeat={"no-repeat"}
          backgroundImage="url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)"
        >
          <Flex
            marginX={"auto"}
            h="min-content"
            p="6"
            rounded="lg"
            mt="24"
            bg="rgba(0,0,0,0.3)"
          >
            <Image src="/hero_text.png" h="200px" />
          </Flex>

          {/* <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        /> */}
        </Flex>
      </Stack>
    </>
  );
}
