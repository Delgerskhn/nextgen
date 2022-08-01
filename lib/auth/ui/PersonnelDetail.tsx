import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import {
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  toaster,
  chakra,
  Select,
  Flex,
  Box,
  Heading,
  useColorModeValue,
} from "@ui/index";
import { useProfile, useUpdateProfile } from "@lib/profile/data/profileHooks";
import { AuthLayout } from "@lib/auth/ui";
import { useCurrentUser } from "../data/authHooks";
import { useRouter } from "next/router";
type ProfileInput = {
  firstName: string;
  lastName: string;
  firstNameEng: string | null;
  lastNameEng: string | null;
  phoneNumber: string | null;
  emailAddress: string | null;
  country: string | null;
  birthDate: Date | null;
  language: string | null;
  sex: string | null;
};
const formatYmd = (date: any) => date.toISOString().slice(0, 10);
export const PersonnelDetail = () => {
  const { t, lang } = useTranslation("account");
  const { data: profile, refetch } = useProfile();
  const profileMutation = useUpdateProfile();
  const { data: currentUser } = useCurrentUser();
  const translationPart = "personnel-detail";
  const headingColor = useColorModeValue("red.500", "yellow.500");
  const label = useColorModeValue("gray.700", "gray.700");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileInput>();

  useEffect(() => {
    if (profile && profile.birthDate)
      setValue("birthDate", formatYmd(new Date(profile.birthDate)));
    setValue("firstName", profile ? profile.firstName : "");
    setValue("lastName", profile ? profile.lastName : "");
    setValue("firstNameEng", profile ? profile.firstNameEng : "");
    setValue("lastNameEng", profile ? profile.lastNameEng : "");
    setValue("country", profile ? profile.country : null);
    setValue("language", profile ? profile.language : null);
    setValue("sex", profile ? profile.sex : null);
    setValue("emailAddress", currentUser ? currentUser.email : null);
  }, [setValue, profile]);

  const onSubmit = handleSubmit((p) => {
    profileMutation.mutate(p, {
      onError: (error: any) => {
        toaster.error(t(error.translationKey));
      },
      onSuccess: () => {
        toaster.success(
          t(`${translationPart}.name-success-message`),
          t(`${translationPart}.name-success-title`)
        );
        refetch();
        router.push({
          pathname: "/",
        });
      },
    });
  });

  return (
    <AuthLayout
      header={t(`${translationPart}.login-header`)}
      actions={
        <Button
          variant={"control"}
          isLoading={profileMutation.isLoading}
          type="submit"
          onClick={onSubmit}
        >
          {t(`${translationPart}.continue`)}
        </Button>
      }
    >
      <Flex flex={1} gap={8} w={"full"} flexDir={"column"}>
        <Heading
          variant={"main"}
          fontWeight={"900"}
          fontSize={"4xl"}
          color={headingColor}
        >
          {t(`${translationPart}.title`)}
        </Heading>

        <Text fontSize={"lg"} fontWeight={700}>
          <Text color={"blue.500"} as="span">
            {t(`${translationPart}.title-action`)}
          </Text>
          <br />
          {t(`${translationPart}.title-support`)}
        </Text>
        <chakra.form>
          <Flex flex={1} gap={8} flexWrap={"wrap"} alignItems={"flex-start"}>
            <FormControl
              w={"44"}
              id="first-name"
              isInvalid={!!errors.firstName}
            >
              <FormLabel color={label}>
                {t(`${translationPart}.first-name`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                type="text"
                autoComplete="off"
                {...register("firstName", { required: "This is required" })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w={"44"} id="last-name" isInvalid={!!errors.lastName}>
              <FormLabel color={label}>
                {t(`${translationPart}.last-name`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                type="text"
                autoComplete="off"
                {...register("lastName", { required: "This is required" })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              w={"44"}
              id="firstNameEng"
              isInvalid={!!errors.firstNameEng}
            >
              <FormLabel color={label}>
                {t(`${translationPart}.first-name-eng`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                type="text"
                autoComplete="off"
                {...register("firstNameEng", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.firstNameEng && errors.firstNameEng.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              w={"44"}
              id="lastNameEng"
              isInvalid={!!errors.lastNameEng}
            >
              <FormLabel color={label}>
                {t(`${translationPart}.last-name-eng`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                type="text"
                autoComplete="off"
                {...register("lastNameEng", { required: "This is required" })}
              />
              <FormErrorMessage>
                {errors.lastNameEng && errors.lastNameEng.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              w={"44"}
              id="phone-number"
              isInvalid={!!errors.phoneNumber}
            >
              <FormLabel color={label}>
                {t(`${translationPart}.phone-number`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                disabled
                type="text"
                autoComplete="phoneNumber"
                {...register("phoneNumber", { required: "This is required" })}
              />
              <FormErrorMessage>
                {errors.phoneNumber && errors.phoneNumber.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              w={"60"}
              id="emailAddress"
              isInvalid={!!errors.emailAddress}
            >
              <FormLabel color={label}>
                {t(`${translationPart}.email-address`)}
              </FormLabel>
              <Input
                type="text"
                autoComplete="emailAddress"
                {...register("emailAddress", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.emailAddress && errors.emailAddress.message}
              </FormErrorMessage>
            </FormControl>
            {/* <FormControl flex={1}  w={"60"} id="sex" isInvalid={!!errors.sex}>
              <FormLabel color={label}>{t(`${translationPart}.sex`)}</FormLabel>
              <Select
                placeholder="Select sex"
                {...register("sex", { required: "This is required" })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
              <FormErrorMessage>
                {errors.sex && errors.sex.message}
              </FormErrorMessage>
            </FormControl> */}
            <FormControl w={"44"} id="country" isInvalid={!!errors.country}>
              <FormLabel color={label}>
                {t(`${translationPart}.country-of-residence`)}
              </FormLabel>
              <Select
                {...register("country", { required: "Country is required" })}
              >
                <option value="mn">Mongolia</option>
              </Select>
              <FormErrorMessage>
                {errors.country && errors.country.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w={"32"} id="language" isInvalid={!!errors.country}>
              <FormLabel color={label}>
                {t(`${translationPart}.language`)}
              </FormLabel>
              <Select
                {...register("language", { required: "language is required" })}
              >
                <option value="eng">English</option>
                <option value="mon">Mongolian</option>
              </Select>
              <FormErrorMessage>
                {errors.language && errors.language.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w={"44"} id="birthDate" isInvalid={!!errors.birthDate}>
              <FormLabel color={label}>
                {t(`${translationPart}.birth-date`)}
              </FormLabel>
              <Input
                textTransform={"capitalize"}
                type="date"
                autoComplete="off"
                {...register("birthDate", { required: "This is required" })}
              />
              <FormErrorMessage>
                {errors.birthDate && errors.birthDate.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w={"44"} id="sex" isInvalid={!!errors.sex}>
              <FormLabel color={label}>{t(`${translationPart}.sex`)}</FormLabel>
              <Select {...register("sex", { required: "Sex is required" })}>
                <option value="male">{t(`${translationPart}.male`)}</option>
                <option value="female">{t(`${translationPart}.female`)}</option>
              </Select>
              <FormErrorMessage>
                {errors.sex && errors.sex.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </chakra.form>
      </Flex>
    </AuthLayout>
  );
};
