import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import { SEO, Center, Link } from "@ui/index";
import { AuthLayout } from "@lib/auth/ui";
import { AuthForm } from "@lib/auth/ui/AuthForm";

const LoginPage = () => {
  const { t } = useTranslation("auth");

  return (
    <>
      <SEO title={t("login")} />
      <AuthLayout
        header={t("login-header")}
        footer={
          <Center>
            <NextLink href="/auth/signup">
              <Link>{t("create-new-account")}</Link>
            </NextLink>
          </Center>
        }
      >
        <AuthForm type="login"/>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
