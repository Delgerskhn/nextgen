import { Hero } from "@lib/guidance/ui/hero";
import { AppLayout } from "@lib/core/ui/components/AppLayout";
import { Content } from "@lib/guidance/ui/content";
import { Timeline } from "@lib/guidance/ui/timeline";
import { SEO } from "@ui/components/SEO";
import { What } from "@lib/guidance/ui/what_is";
import { Goal } from "@lib/guidance/ui/goal";
import { ProjectLeading } from "@lib/guidance/ui/project_leading";
import { ProjectSelection } from "@lib/guidance/ui/project_selection";
import { Prohibition } from "@lib/guidance/ui/prohibition";
import { Financing } from "@lib/guidance/ui/financing";
import { Document } from "@lib/guidance/ui/document";

const GuidancePage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Hero />
        <What />
        <Goal />
        <ProjectLeading />
        <Prohibition />
        <Document />
        <ProjectSelection />
        <Financing />
        <Timeline />
      </AppLayout>
    </>
  );
};

export default GuidancePage;
