import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
  Stack,
  Image,
  Box,
  FormErrorMessage,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useLogin } from "@lib/auth/data/authHooks";
import { toaster } from "@ui/index";
import { Header } from "@ui/components/Header";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { HiEyeOff, HiEye } from "react-icons/hi";
type FormValues = {
  email: string;
  password: string;
};
export default function LoginPage() {
  const { t: ta } = useTranslation("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const loginMutation = useLogin();
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  const onSubmit = handleSubmit((authInput) => {
    loginMutation.mutate(authInput, {
      onError: (error: any) => {
        toaster.error(ta(error.translationKey));
      },
      onSuccess: (user) => {
        //onst nextPath: string = router.query.redirectTo
        // ? router.query.redirectTo.toString()
        // : defaultPaths[user.role];
        router.push("/account/profile");
      },
    });
  });
  return (
    <>
      <Header />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}></Heading>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>И-мэйл хаяг</FormLabel>
              <Input
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Заавал",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Нууц үг</FormLabel>
              <InputGroup>
                <Input
                  type={isOpen ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  {...register("password", {
                    required: "Заавал",
                    minLength: {
                      value: 8,
                      message: "Багадаа 8 үсэг тоо орсон байх ёстой.",
                    },
                  })}
                />
                <InputRightElement>
                  <IconButton
                    bg="transparent !important"
                    variant="ghost"
                    aria-label={isOpen ? "Mask password" : "Reveal password"}
                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                    onClick={onToggle}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Сануулах</Checkbox>
                <Link color={"blue.500"}>Нууц үгээ мартсан?</Link>
              </Stack>
              <Button onClick={onSubmit} colorScheme={"blue"} variant={"solid"}>
                Нэвтрэх
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align="center" fontSize={"sm"} color="gray.400">
                Та бүртгэл үүсгэсний дараа оролцогчийн анкет илгээх боломжтой
              </Text>
              <Text align={"center"}>
                Бүртгэл байхгүй?{" "}
                <Link href="/auth/signup" color={"blue.400"}>
                  Бүртгүүлэх
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
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
