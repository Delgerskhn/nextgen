import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  SEO,
  Flex,
  Link,
  HStack,
  Center,
  AppLayout,
  Button,
  Box,
} from "@ui/index";
import { useCurrentUser, useLogout } from "@lib/auth/data/authHooks";
import { Hero } from "@lib/home/ui/Hero";
import { ProjectLeadingSectors } from "@lib/home/ui/ProjectLeadingSectors";
import { ProjectTimeline } from "@lib/home/ui/ProjectTimeline";
import { Goal } from "@lib/home/ui/Goal";
import { Target } from "@lib/home/ui/Target";
import { Future } from "@lib/home/ui/future";
import { Selection } from "@lib/home/ui/selection";
import { Map } from "@lib/home/ui/map";
import { Mentor } from "@lib/home/ui/mentor";
const HomePage = () => {
  const { isLoggedIn, user, error } = useCurrentUser();
  const logoutMutation = useLogout();
  return (
    <>
      <SEO />
      <AppLayout>
        <Flex direction="column">
          <Hero />
          <Goal />
          <Target />
          <Selection />
          <ProjectLeadingSectors />
          <Future />
          <Selection />
          <ProjectTimeline />
          <Mentor />
          <Map />
        </Flex>
      </AppLayout>
    </>
  );
};

export default HomePage;
