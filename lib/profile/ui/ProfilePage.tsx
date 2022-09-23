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
  Heading,
  Box,
  AlertTitle,
  HStack,
  Divider,
} from "@ui/index";
import { useProfile, useUpdateProfile } from "@lib/profile/data/profileHooks";
import { navItems } from ".";
import { useAuth } from "@lib/auth/ui";
import { uploadToS3 } from "@lib/file/data/uploadHooks";
import { FileUpload } from "@lib/file/ui";
import { FileUploader } from "@lib/file/ui/FileUploader";
import { AccountList } from "@lib/account/ui/AccountList";
import { ProjectForm } from "@lib/project/ui/ProjectForm";
import { EditAccountInfo } from "@lib/account/ui/EditAccountInfo";
import { AccountForm } from "@lib/account/ui/AccountForm";
import { useAccount, useUpdateAccount } from "@lib/account/data/accountHook";
import { ProjectInfoForm } from "@lib/project/ui/ProjectInfoForm";
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
  const { data } = useAccount();
  const updateAccount = useUpdateAccount();

  return (
    <AppLayout title={t("profile")}>
      <SEO title={t("profile")} />
      <NavMenuLayout
        title={t("profile")}
        navItems={navItems.map((navItem) => ({
          name: t(`${navItem.name}`),
          link: navItem.link,
          type: navItem.name === "profile" ? "active" : "",
        }))}
      >
        <Box h="4" />
        <NavContentLayout>
          <Heading>
            Доорх мэдээллийг бүрэн оруулсны дараа хариу ирэхийг анхаарна уу.
          </Heading>
          <ProjectInfoForm />
          <>
            <Heading size="sm">
              Доорх файлуудыг татан авч загварын дагуу төслөө бичиж оруулахыг
              анхаарна уу
            </Heading>
            <Divider my="4" />
            <HStack>
              <Button
                as="a"
                color="white"
                target={"_blank"}
                href="/nextgen-project-guide.pptx"
              >
                Төслийн маягт татах
              </Button>
              <Button
                color="white"
                as="a"
                target={"_blank"}
                href="/nextgen-budget.xlsx"
              >
                Төсвийн загвар татах
              </Button>
            </HStack>
          </>
          <ProjectForm />
          {data && (
            <>
              <Heading size="md">Хэрэглэгчийн бүртгэлийн мэдээлэл</Heading>
              <Divider my="4" />
              <AccountForm
                onSubmit={(input) =>
                  updateAccount.mutate(input, {
                    onError: () => toaster.error("Алдаа гарлаа."),
                    onSuccess: () => toaster.success("Амжилттай шинэчиллээ."),
                  })
                }
                data={{ ...data, email: user ? user?.email : null }}
              />
            </>
          )}
          {/* <AccountList /> */}
        </NavContentLayout>
      </NavMenuLayout>
    </AppLayout>
  );
};
