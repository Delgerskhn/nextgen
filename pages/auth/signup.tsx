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
  VStack,
} from "@chakra-ui/react";
import { useSignup } from "@lib/auth/data/authHooks";
import { AppLayout, toaster } from "@ui/index";
import { Header } from "@ui/components/Header";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsToggleOff } from "react-icons/bs";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { SignupFormInput, SignupInput } from "@lib/auth/data/types";
import { useCreateAccount } from "@lib/account/data/accountHook";
import { useCreateProject } from "@lib/project/data/projectHooks";
import { validatePhoneNumber } from "@lib/user/data/validators";
import { TermsModal } from "@lib/auth/ui/TermsModal";
import { AccountForm } from "@lib/account/ui/AccountForm";
import { AccountInput } from "@lib/account/data/types";
import { SignupForm } from "@lib/account/ui/SignupForm";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const signupMutation = useSignup();
  const createAccount = useCreateAccount();
  const createProject = useCreateProject();
  const { t: ta } = useTranslation("auth");
  const router = useRouter();

  const onSubmit = (authInput: SignupFormInput) => {
    signupMutation.mutate(
      { email: authInput.email!, password: authInput.password },
      {
        onError: (error: any) => {
          toaster.error(ta(error.translationKey));
        },
        onSuccess: (user) => {
          const {
            firstName,
            lastName,
            sex,
            age,
            birthDate,
            city,
            district,
            education,
            emergencyPhoneNumber,
            emergencyPhoneOwner,
            familyName,
            nationality,
            occupation,
            phoneNumber,
            profession,
            registerNo,
            street,
          } = authInput;
          createAccount.mutate({
            firstName,
            lastName,
            userId: user.id,
            sex,
            age,
            birthDate,
            city,
            district,
            education,
            emergencyPhoneNumber,
            emergencyPhoneOwner,
            familyName,
            nationality,
            occupation,
            phoneNumber,
            profession,
            registerNo,
            street,
          });
          createProject.mutate({
            name: "",
            userId: user.id,
          });
          toaster.success("Амжилттай бүртгэгдлээ.");
          //onst nextPath: string = router.query.redirectTo
          // ? router.query.redirectTo.toString()
          // : defaultPaths[user.role];
          router.push("/auth/login");
        },
      }
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header />
      <Flex
        w={"100%"}
        minH={"300px"}
        bg={"primeBlue"}
        backgroundImage="url('/Header.png')"
        // backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundRepeat="no-repeat"
      >
        <VStack
          w={"full"}
          justify={"center"}
          // px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Heading size={"3xl"} color="white" fontFamily="NotoSans">
            Бүртгүүлэх
          </Heading>
        </VStack>
      </Flex>
      <TermsModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
      <Stack
        py="20"
        w="full"
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        px={{ base: "5", sm: "20", md: "0" }}
      >
        <SignupForm isLoading={signupMutation.isLoading} onSubmit={onSubmit} />
      </Stack>
    </>
  );
}
