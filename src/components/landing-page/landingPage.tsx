import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import ComprehensiveHelp from "@/components/landing-page/comprehensiveHelp";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <AssignmentHelp />
      <WhyStudentTrustUs />
      <HelpYouNeed />
      <BestAssignmentWiter />
      <UnmatchedAcademicSuccess />
      <WhatStudentSayAboutUs />
      <StuckOnAssignment />
      <ComprehensiveHelp />
      <AffordablePricing />
      <WritingTool />
      <FAQS />
    </div>
  );
}
