import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";

export default function Page() {
  return (
    <div className="w-full ">
          <AssignmentHelp changeInForm="" changeInH="" changeInP="" />
          <WhyStudentTrustUs />
          <BestAssignmentWiter changeInExpertWriteP="Discover the Best Professional Writers to Guarantee You an A+." changeInExpertWriteTilte="Hire Affordable Writers for A+ Content"/>
          <HelpYouNeed  changeInYouNeedTitle="" changeInYouNeedbtn=""/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="" changeInUnmatedp="" />
          <WhatStudentSayAboutUs changeInP="" changeTitle=""/>
          <StuckOnAssignment changeInP="" changeTitle=""/>
          <AffordablePricing changeInP={""} changeTitle={""} /> 
          <UnlockExpertHelp changeInP={""} changeTitle={""}/>  
          <Footer />
    </div>
  );
}
