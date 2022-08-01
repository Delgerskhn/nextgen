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
  Select,
  Divider,
  PinInput,
  PinInputField,
  useDisclosure,
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
import { useCreateAccount } from "@lib/account/data/accountHook";
import { useCreateProject } from "@lib/project/data/projectHooks";
import { validatePhoneNumber } from "@lib/user/data/validators";
import { TermsModal } from "@lib/auth/ui/TermsModal";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const signupMutation = useSignup();
  const createAccount = useCreateAccount();
  const createProject = useCreateProject();
  const { t: ta } = useTranslation("auth");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm<SignupInput>({
    defaultValues: {
      projectName: "",
    },
  });

  const onSubmit = handleSubmit((authInput) => {
    signupMutation.mutate(authInput, {
      onError: (error: any) => {
        toaster.error(ta(error.translationKey));
      },
      onSuccess: (user) => {
        const { firstName, lastName, sex, age, projectName } = authInput;
        createAccount.mutate({
          pictureKey: null,
          firstName,
          lastName,
          userId: user.id,
          sex,
          age,
        });
        createProject.mutate({
          name: projectName,
          userId: user.id,
        });
        //onst nextPath: string = router.query.redirectTo
        // ? router.query.redirectTo.toString()
        // : defaultPaths[user.role];
        router.push("/");
      },
    });
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header />
      <TermsModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              {/* Бүртгэл */}
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            {/* <FormControl
              id="projectName"
              isRequired
              isInvalid={!!errors.projectName}
            >
              <FormLabel>Төслийн нэр</FormLabel>
              <Input
                type="email"
                {...register("projectName", {
                  required: "Заавал",
                })}
              />
              <FormErrorMessage>
                {errors.projectName && errors.projectName.message}
              </FormErrorMessage>
            </FormControl> */}
            <Stack spacing={4}>
              {/* <FormLabel mt="4">Төслийн ахлагчийн мэдээлэл</FormLabel> */}
              {/* <Divider /> */}
              <HStack>
                <Box>
                  <FormControl
                    id="firstName"
                    isRequired
                    isInvalid={!!errors.firstName}
                  >
                    <FormLabel>Нэр</FormLabel>
                    <Input
                      type="text"
                      {...register("firstName", {
                        required: "Заавал",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl
                    isRequired
                    id="lastName"
                    isInvalid={!!errors.lastName}
                  >
                    <FormLabel>Овог</FormLabel>
                    <Input
                      type="text"
                      {...register("lastName", {
                        required: "Заавал",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>
              {/* <FormControl
                isRequired
                id="register"
                isInvalid={!!errors.register}
              >
                <FormLabel>Регистрийн дугаар</FormLabel>
                <HStack justify={"space-between"}>
                  <Select
                    size="sm"
                    w="min-content"
                    minW="3rem"
                    defaultValue={"а"}
                    {...register("registerFirstLetter")}
                  >
                    {alphabets.split("").map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </Select>
                  <Select
                    defaultValue={"а"}
                    size="sm"
                    w="min-content"
                    {...register("registerSecondLetter")}
                    minW="3rem"
                  >
                    {alphabets.split("").map((a) => (
                      <option key={a}>{a}</option>
                    ))}{" "}
                  </Select>
                  <PinInput
                    size="sm"
                    onChange={(val) => {
                      setValue("registerNumber", val);
                    }}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
                <FormErrorMessage>
                  {errors.register && errors.register.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired id="phone" isInvalid={!!errors.phone}>
                <FormLabel>Утасны дугаар</FormLabel>
                <Input
                  type="number"
                  {...register("phone", {
                    required: "Заавал",
                    validate: (val) => {
                      const valid = validatePhoneNumber(val, "mn");
                      if (!valid.isValid) return "Утасны дугаар буруу байна.";
                      return valid.isValid;
                    },
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl> */}
              <HStack>
                <Box flex="1">
                  <FormControl isRequired id="sex" isInvalid={!!errors.sex}>
                    <FormLabel>Хүйс</FormLabel>
                    <Select
                      type="text"
                      {...register("sex", {
                        required: "Заавал",
                      })}
                    >
                      <option>Эрэгтэй</option>
                      <option>Эмэгтэй</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.sex && errors.sex.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box flex="1">
                  <FormControl isRequired id="age" isInvalid={!!errors.age}>
                    <FormLabel>Нас</FormLabel>
                    <Select
                      type="number"
                      {...register("age", {
                        required: "Заавал",
                        valueAsNumber: true,
                      })}
                    >
                      {new Array(18).fill(0).map((_, i) => (
                        <option key={i}>{i + 18}</option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.age && errors.age.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired isInvalid={!!errors.email}>
                <FormLabel>И-мэйл хаяг</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: "Заавал",
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
                <FormLabel>Нууц үг</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    {...register("password", {
                      required: "Заавал",
                      minLength: {
                        value: 8,
                        message: "Хамгийн багадаа 8 үсэг тоо байна.",
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
                  onClick={onOpen}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Бүртгүүлэх
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Бүртгэлтэй юу?{" "}
                  <Link href="/auth/login" color={"blue.400"}>
                    Нэвтрэх
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

const alphabets = "фцужэнгшүзкъщепдлорхаөбыйячёсмитьвю";
