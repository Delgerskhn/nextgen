import { Hero } from "@lib/guidance/ui/hero";
import { AppLayout } from "@lib/core/ui/components/AppLayout";
import { Content } from "@lib/guidance/ui/content";
import { Timeline } from "@lib/guidance/ui/timeline";
import { SEO } from "@ui/components/SEO";

const GuidancePage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Hero />
        <Content />
        <Timeline />
      </AppLayout>
    </>
  );
};

export default GuidancePage;
