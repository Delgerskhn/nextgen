import { SEO, Flex, AppLayout } from "@ui/index";
import { useCurrentUser, useLogout } from "@lib/auth/data/authHooks";
import { Hero } from "@lib/home/ui/Hero";
import { ProjectLeadingSectors } from "@lib/home/ui/ProjectLeadingSectors";
import { ProjectTimeline } from "@lib/home/ui/ProjectTimeline";
import { Selection } from "@lib/home/ui/selection";
import { Mentor } from "@lib/home/ui/mentor";
import { Leading } from "@lib/home/ui/leading";
const HomePage = () => {
  const { isLoggedIn, user, error } = useCurrentUser();
  const logoutMutation = useLogout();
  return (
    <>
      <SEO />
      <AppLayout>
        <Flex direction="column">
          <Hero />
          <ProjectLeadingSectors />
          <Selection />
          <ProjectTimeline />
          <Mentor />
        </Flex>
      </AppLayout>
    </>
  );
};

export default HomePage;
