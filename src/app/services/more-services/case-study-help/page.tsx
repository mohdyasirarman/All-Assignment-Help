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
          <AssignmentHelp changeInForm="" changeInH="Case Study Help For Your Academic Success" changeInP="Sign up for quick and affordable case study assignment help from the best minds today!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Access Online Case Study Help Efficiently" changeInYouNeedbtn="Order Now"/>
          <BestAssignmentWiter changeInExpertWriteP="A look at the team of case study writing experts who will help boost your grades:" changeInExpertWriteTilte="Our Team of Expert Case Study Writers at MyAssignmentHelp"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Unlock The Benefits of Our Case Study Help" changeInUnmatedp="Amazing benefits for students availing our services" />
          <WhatStudentSayAboutUs changeInP="33,845 Genuine reviews with a rating of 4.9/5" changeTitle="Top scholars reviews & ratings"/>
          <StuckOnAssignment changeInP="Place an order to get online case study help and pave your way to a perfect A+!" changeTitle="Get Your Case Study Help Today!"/>
          <AffordablePricing changeInP={"We offer help with all types of case studies. Take a look below"} changeTitle={"Affordable Rates for Quality Case Study Help Online"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
