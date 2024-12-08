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
          <AssignmentHelp  changeInH="Do My Coursework Online For Me" changeInP="Can Someone Write My Coursework for Me? Our Experts Certainly Can!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="How Does Our Coursework Services Work?" changeInYouNeedbtn="Place Order"/>
          <BestAssignmentWiter changeInExpertWriteP="Find the Best Experts Who Can Provide Outstanding Coursework Help" changeInExpertWriteTilte="Our Top Writers are Ready to Help You"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Opting for Our Do My Coursework Service" changeInUnmatedp="Discover Why Students Love to Rely On Our Writing Service" />
          <WhatStudentSayAboutUs changeInP="Take a Peek into the Experiences of Our Verified Clients." changeTitle="Happy Customer Feedback About Our Services"/>
          <StuckOnAssignment changeInP="Enjoy the Best Academic Help at an Affordable Price" changeTitle="Do My Coursework Online, Please"/>
          <AffordablePricing changeInP={"Enjoy a Wide Variety of Services & Free Add-Ons"} changeTitle={"We Offer Coursework Writing Services For All Subjects"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
