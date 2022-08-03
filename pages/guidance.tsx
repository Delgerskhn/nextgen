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
import { Target } from "@lib/guidance/ui/target";
import { DateComp } from "@lib/guidance/ui/date";
import { Nessacility, Receive, Selection } from "@lib/guidance/ui/nessacilty";
import { ProjectLevel } from "@lib/guidance/ui/project_level";
import { ProjectLevelTimeline } from "@lib/guidance/ui/timeline_project_level";

const GuidancePage = () => {
  return (
    <>
      <SEO />
      <AppLayout>
        <Hero />
        <What />
        <Goal />
        <Target />
        <DateComp />
        <ProjectLeading />
        <ProjectLevelTimeline />
        <ProjectLevel />
        <Prohibition />
        <Document />
        <Nessacility />
        <Receive />
        <Selection />
        <Financing />
      </AppLayout>
    </>
  );
};

export default GuidancePage;
