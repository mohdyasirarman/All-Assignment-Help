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
          <AssignmentHelp changeInForm="" changeInH="Homework Help Online" changeInP="Get homework help online today and revamp your career like never before!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Get Online Homework Help in 3 Steps" changeInYouNeedbtn="Order Now"/>
          <BestAssignmentWiter changeInExpertWriteP="Know Our Certified Writers Before You Hire Them" changeInExpertWriteTilte="Top Homework Helpers"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Get Expert Help with Homework Online" changeInUnmatedp="Sign up with the Best-In-Class Academic Platform Today!" />
          <WhatStudentSayAboutUs changeInP="3,000+ Genuine Reviews by Students with a 4.9/5 rating!!" changeTitle="Our Customers Review about Online Homework Help"/>
          <StuckOnAssignment changeInP="Our best online homework help goes easy on your pocket!!" changeTitle="Order Our Homework Service Today and Get a Discount!"/>
          <AffordablePricing changeInP={"Get Incredible Perks from the Best Minds in a Click"} changeTitle={"Our Prices for Homework Help"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
