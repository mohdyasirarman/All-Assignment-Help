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
          <AssignmentHelp changeInForm="" changeInH="Pay Someone To Do My Homework" changeInP="Our “pay someone to do my homework” service guarantees an A+." />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="“Pay Someone to Do My Homework” Service in 3 Steps" changeInYouNeedbtn="Place Order Now!"/>
          <BestAssignmentWiter changeInExpertWriteP="Get AI-Proof Homework Written By The Best Minds" changeInExpertWriteTilte="Team Of Experienced Homework Writers"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Why Students Prefer To Pay Us For Their Homework" changeInUnmatedp="Discover the benefits of hiring professional writers for your assignment." />
          <WhatStudentSayAboutUs changeInP="Sneak a peek into the experience of other students." changeTitle="Satisfied Student Reviews"/>
          <StuckOnAssignment changeInP="Writing homework becomes easier with professional academic assistance." changeTitle="MyAssignmentHelp: Best Place To Pay Someone To Do My Homework"/>
          <AffordablePricing changeInP={"Get an unbelievable price upon hiring our academic help services."} changeTitle={"Pay Someone to Do My Homework” Service Types and Prices"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
