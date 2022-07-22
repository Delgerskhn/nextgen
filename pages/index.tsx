import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import { SEO, Flex, Link, HStack, Center, AppLayout, Button } from "@ui/index";
import { useCurrentUser, useLogout } from "@lib/auth/data/authHooks";

const HomePage = () => {
  const { isLoggedIn, user, error } = useCurrentUser();
  const logoutMutation = useLogout();
  console.log(error)
  return (
    <>
      <SEO />
      <AppLayout>
        <Flex direction="column">
          {error && <Center mb={3}>error</Center>}
          {!error && isLoggedIn && (
            <Center mb={3}>{user?.email}-р нэвтэрсэн байна.</Center>
          )}
          <HStack spacing={3} mb={3} mx="auto">
            {isLoggedIn && (
              <Button variant={"outline"} onClick={() => logoutMutation.mutate()}>Гарах</Button>
            )}
            {!isLoggedIn && (
              <>
                <NextLink href="/auth/signup" passHref>
                  <Link>Бүртгүүлэх</Link>
                </NextLink>
                <NextLink href="/auth/login" passHref>
                  <Link>Нэвтрэх</Link>
                </NextLink>
              </>
            )}
          </HStack>
        </Flex>
      </AppLayout>
    </>
  );
};

export default HomePage;
