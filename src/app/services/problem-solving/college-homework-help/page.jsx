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
          <AssignmentHelp c changeInH="College Homework Help Services" changeInP="Get college homework help to end your war with complicated tasks." />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="How Homework Help for College Students Works: Easy Steps to Success" changeInYouNeedbtn="Click to Start"/>
          <BestAssignmentWiter changeInExpertWriteP="Use the proficiency of our professional writers to unleash the topper in you!" changeInExpertWriteTilte="Excel in Your Studies with College Homework Help Online"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Online College Homework Help: Benefits of Our Writing Service" changeInUnmatedp="Seek help with college homework to unlock premium services, add-ons & more!" />
          <WhatStudentSayAboutUs changeInP="Skeptical about hiring a college homework helper? Check what students say about us!" changeTitle="College Homework Help Review: What Students Are Saying"/>
          <StuckOnAssignment changeInP="Avail of our homework writing services to stay ahead of your fellow students!" changeTitle="Get Your Homework Done with College Homework Help Today!"/>
          <AffordablePricing changeInP={"Prices that don't burn a hole in your pocket but get you the grades you desire!"} changeTitle={"Affordable Pricing Options for College Homework Help"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
