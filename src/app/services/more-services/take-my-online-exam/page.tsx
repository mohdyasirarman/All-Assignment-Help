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
          <AssignmentHelp changeInForm="" changeInH="Take My Exam Get Online Expert Help" changeInP="Boost Your Success with Our Online Exam Help – Ace It Today!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="How to Hire an Expert to Take Your Online Exam" changeInYouNeedbtn="Sign Up Now!"/>
          <BestAssignmentWiter changeInExpertWriteP="Meet Our Exam Helpers: Your Academic Success Partners" changeInExpertWriteTilte="Choose Professional Who Will Take Your Online Exam"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Benefits of Our Online Exam Help" changeInUnmatedp="Hire Someone from Us and Get the Taste of the Best" />
          <WhatStudentSayAboutUs changeInP="Let the Real-Life Stories Help You Make the Perfect Choice" changeTitle="What Students Say About Us after Scoring Higher Grades"/>
          <StuckOnAssignment changeInP="Find the Secret Spell to Triumph with Our Online Exam Assistance" changeTitle="Ace Your Online Exams with Professional Help"/>
          <AffordablePricing changeInP={"Ask “Take My Online Test” Without Worrying about Your Pocket"} changeTitle={"Pay Someone to Take My Online Exam Prices"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
