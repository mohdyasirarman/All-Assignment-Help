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
          <AssignmentHelp changeInForm="" changeInH="Urgent Assignment Help" changeInP="“Can I get urgent assignment help for me?” Of Course!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Urgent Assignment Writers Provide Guidance in 3 Simple Steps" changeInYouNeedbtn="Order Now"/>
          <BestAssignmentWiter changeInExpertWriteP="Hire Reliable Subject Matter Experts for a Guaranteed A+." changeInExpertWriteTilte="Top Urgent Assignment Helpers Available to Assist You"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Our Urgent Assignment Help Service" changeInUnmatedp="We’re the #1 Choice when Students Need Urgent Homework Help." />
          <WhatStudentSayAboutUs changeInP="Students Rate Us 4.9 Out of 5 – Find Out Why!" changeTitle="Student Feedback for Urgent Assignment Help Services"/>
          <StuckOnAssignment changeInP="Hire the Best Service Provider for Quality Assignments." changeTitle="Get Urgent Assignment Writing Help from Top Scholars"/> 
          <AffordablePricing changeInP={"Enjoy the Best Assignment Assistance with Additional Perks."} changeTitle={"We Cover All Types of Tasks Under Urgent Assignment Help Online"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
