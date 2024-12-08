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

export default function LandingPage() {
  return (
    <div className="w-full ">
          <AssignmentHelp changeInH="Write My Term Paper, Please" changeInP="Avail of our term paper help and unlock your academic success" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Effortless Write My Term Paper Process" changeInYouNeedbtn="Order Now"/>
          <BestAssignmentWiter changeInExpertWriteP="Know our expert writers Before hiring them" changeInExpertWriteTilte="Choose an Expert for Your Term Paper"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Why Choose Our Term Paper Writers" changeInUnmatedp="Get academic papers written by the best minds" />
          <WhatStudentSayAboutUs changeInP="Get academic papers written by the best minds" changeTitle="Why Choose Our Term Paper Writers"/>
          <StuckOnAssignment changeInP="Your search for the best term paper writing help ends here!!" changeTitle="Get Online Term Paper Help"/>
          <AffordablePricing changeInP={"Enjoy incredible perks with just a click"} changeTitle={"Transparent Write My Term Paper Pricing"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
