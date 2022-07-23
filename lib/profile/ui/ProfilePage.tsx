import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import {
  SEO,
  AppLayout,
  NavMenuLayout,
  NavContentLayout,
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
} from "@ui/index";
import { useProfile, useUpdateProfile } from "@lib/profile/data/profileHooks";
import { navItems } from ".";
import { useAuth } from "@lib/auth/ui";
type ProfileInput = {
  firstName: string;
  lastName: string;
  firstNameEng: string | null;
  lastNameEng: string | null;
  phoneNumber: string;
  emailAddress: string;
  birthDate: Date | null;
  sex: string | null;
  country: string;
};
export const ProfilePage = () => {
  const { t, lang } = useTranslation("account");
  const { data: profile, refetch } = useProfile();
  const { data: user } = useAuth();
  const profileMutation = useUpdateProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileInput>();

  useEffect(() => {
    setValue("firstName", profile ? profile.firstName : "");
    setValue("lastName", profile ? profile.lastName : "");
    setValue("emailAddress", user?.email || "");
  }, [setValue, profile]);

  const onSubmit = handleSubmit((p) => {
    console.log(p);
    profileMutation.mutate(p, {
      onError: (error: any) => {
        toaster.error(t(error.translationKey));
      },
      onSuccess: () => {
        toaster.success(t("name-success-message"), t("name-success-title"));
        refetch();
      },
    });
  });

  return (
    <AppLayout title={t("profile")}>
      <SEO title={t("profile")} />
      <NavMenuLayout
        title={t("profile")}
        backLink={{ name: t(`back-button`), link: "/" }}
        navItems={navItems.map((navItem) => ({
          name: t(`${navItem.name}`),
          link: navItem.link,
          type: navItem.name === "profile" ? "active" : "",
        }))}
      >
        <NavContentLayout
          actions={
            <Button
              variant={"control"}
              isLoading={profileMutation.isLoading}
              type="submit"
              onClick={onSubmit}
            >
              {t("name-save")}
            </Button>
          }
        >
          <chakra.form>
            <Text size="sm">{t("profile-hint")}</Text>
            <Flex flex={1} gap={10} flexWrap={"wrap"} flexDir={"column"}>
              <FormControl
                id="first-name"
                isInvalid={!!errors.firstName}
                flex={1}
              >
                <FormLabel>{t("first-name", { lang: lang })}</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  {...register("firstName", { required: "This is required" })}
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="last-name" isInvalid={!!errors.lastName}>
                <FormLabel>{t("last-name")}</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  {...register("lastName", { required: "This is required" })}
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl id="emailAddress" isInvalid={!!errors.emailAddress}>
                <FormLabel>{t("email-address")}</FormLabel>
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
            </Flex>
          </chakra.form>
        </NavContentLayout>
      </NavMenuLayout>
    </AppLayout>
  );
};
