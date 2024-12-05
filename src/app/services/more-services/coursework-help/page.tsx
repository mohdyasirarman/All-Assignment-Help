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
          <AssignmentHelp changeInForm="" changeInH="Coursework Help Services: Boost Your Academic Success" changeInP="Get A-Rated Professional Coursework Services Without Breaking the Bank" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="How Does Our Coursework Help Services Work?" changeInYouNeedbtn="Place an Order"/>
          <BestAssignmentWiter changeInExpertWriteP="Choose Our Expert Coursework Writers for Coursework Writing Service" changeInExpertWriteTilte="Our Top Coursework Writers Ready to Help You"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Opting for Our Online Coursework Service" changeInUnmatedp="Enjoy Amazing Benefits with the Best Professional Coursework Writers" />
          <WhatStudentSayAboutUs changeInP="Top Quality Coursework Service - See What Others Have to Say" changeTitle="Students Review: Unparalleled Coursework Help Online Experience"/>
          <StuckOnAssignment changeInP="Find Coursework Writing Help Online without Breaking a Sweat" changeTitle="Get the Best Coursework Writing Service"/> 
          <AffordablePricing changeInP={"Get Comprehensive Coursework Guidance at Rockbottom Prices"} changeTitle={"We Offer Cheap Coursework Writing Service for All Subjects"} />  
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
