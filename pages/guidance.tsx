import { Hero } from "@lib/guidance/ui/hero";
import { AppLayout } from "@lib/core/ui/components/AppLayout";
import { Content } from "@lib/guidance/ui/content";
import { Timeline } from "@lib/guidance/ui/timeline";
import { Goal } from "@lib/guidance/ui/goal";
import { SEO } from "@ui/components/SEO";
import { Target } from "@lib/guidance/ui/target";

const GuidancePage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Hero />
        <Goal />
        <Target />
        <Content />
        <Timeline />
      </AppLayout>
    </>
  );
};

export default GuidancePage;
