import { Stack } from "@chakra-ui/react";
import { Goal } from "@lib/goal/goal";
import { Hero } from "@lib/goal/hero";
import { Target } from "@lib/goal/target";
import { AppLayout } from "@lib/core/ui/components/AppLayout";
import { SEO } from "@ui/components/SEO";

const GoalPage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Stack>
          <Hero />
          <Goal />
          <Target />
        </Stack>
      </AppLayout>
    </>
  );
};

export default GoalPage;
