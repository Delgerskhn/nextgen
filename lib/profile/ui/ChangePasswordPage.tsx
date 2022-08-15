import { useForm } from "react-hook-form";
import {
  SEO,
  AppLayout,
  NavMenuLayout,
  NavContentLayout,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  toaster,
  chakra,
} from "@ui/index";
import { PasswordField } from "@lib/auth/ui";
import useTranslation from "next-translate/useTranslation";
import { useChangePassword } from "@lib/profile/data/profileHooks";
import { useRouter } from "next/router";
import { navItems } from ".";
import { validatePassword } from "@lib/user/data/validators";

export const ChangePasswordPage = () => {
  const { t } = useTranslation("account");
  const router = useRouter();
  const changePasswordMutation = useChangePassword();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<{
    passwordCurrent: string;
    passwordNew: string;
    passwordConfirmation: string;
  }>();

  const onSubmit = handleSubmit((changePasswordInput) => {
    if (
      changePasswordInput.passwordNew !==
      changePasswordInput.passwordConfirmation
    )
      toaster.error(t("validation-password-match"));
    else
      changePasswordMutation.mutate(
        {
          current: changePasswordInput.passwordCurrent,
          password: changePasswordInput.passwordNew,
        },
        {
          onError: (error: any) => {
            toaster.error(t(error.translationKey));
          },
          onSuccess: () => {
            toaster.success(
              t("password-success-message"),
              t("password-success-title")
            );
            router.push("/account/credentials");
          },
        }
      );
  });

  return (
    <AppLayout title={t("change-password")}>
      <SEO title={t("change-password")} />
      <NavMenuLayout
        title={t("change-password")}
        backLink={{ name: t(`back-button`), link: "/" }}
        navItems={navItems.map((navItem) => ({
          name: t(`${navItem.name}`),
          link: navItem.link,
          type: navItem.name === "credentials" ? "active" : "",
        }))}
      >
        <NavContentLayout
          actions={
            <>
              <Button
                variant={"control"}
                disabled={
                  !!errors.passwordCurrent ||
                  !!errors.passwordNew ||
                  !!errors.passwordConfirmation
                }
                isLoading={changePasswordMutation.isLoading}
                onClick={onSubmit}
              >
                {t("password-update")}
              </Button>
            </>
          }
        >
          <chakra.form onSubmit={onSubmit}>
            <Stack spacing="6">
              <FormControl>
                <PasswordField
                  id="password-current"
                  label={t("password-current")}
                  forgotPasswordLabel=""
                  error={errors.passwordCurrent}
                  {...register("passwordCurrent", {
                    required: "This is required",

                    minLength: {
                      value: 8,
                      message: "Minimum length should be 8",
                    },
                  })}
                />
              </FormControl>
              <FormControl>
                <PasswordField
                  id="password-new"
                  label={t("password-new")}
                  forgotPasswordLabel=""
                  error={errors.passwordNew}
                  {...register("passwordNew", {
                    required: "This is required",
                    validate: (v) => {
                      if (!validatePassword(v))
                        return "Латинаар нэг том үсэг нэг тоо оруулна уу.";
                      return true;
                    },
                    minLength: {
                      value: 8,
                      message: "Minimum length should be 8",
                    },
                  })}
                />
              </FormControl>
              <FormControl>
                <PasswordField
                  id="password-confirmation"
                  label={t("password-confirmation")}
                  forgotPasswordLabel=""
                  error={errors.passwordConfirmation}
                  {...register("passwordConfirmation", {
                    required: "This is required",
                    validate: (v) => {
                      const pass = getValues("passwordNew");
                      if (v != pass) return "Нууц үгээ зөв давтаж оруулна уу.";
                      return true;
                    },
                    minLength: {
                      value: 8,
                      message: "Minimum length should be 8",
                    },
                  })}
                />
              </FormControl>
            </Stack>
          </chakra.form>
        </NavContentLayout>
      </NavMenuLayout>
    </AppLayout>
  );
};
