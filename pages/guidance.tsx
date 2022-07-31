import { Hero } from "@lib/guidance/ui/hero";
import { AppLayout } from "@lib/core/ui/components/AppLayout";
import { Content } from "@lib/guidance/ui/content";
import { Timeline } from "@lib/guidance/ui/timeline";
import { SEO } from "@ui/components/SEO";
import { What } from "@lib/guidance/ui/what_is";
import { Goal } from "@lib/guidance/ui/goal";
import { ProjectLeading } from "@lib/guidance/project_leading";

const GuidancePage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Hero />
        <What />
        <Goal />
        <ProjectLeading />
        <Content />
        <Timeline />
      </AppLayout>
    </>
  );
};

export default GuidancePage;
