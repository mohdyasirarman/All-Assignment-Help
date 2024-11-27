import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";


const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="Cheap Essay Writing Service" changeInP="Try Our Cheap Writing Services to Ace All Your Essays" />
      <WhyStudentTrustUs />
      <BestAssignmentWiter changeInExpertWriteP="Discover the Best Professional Writers to Guarantee You an A+." changeInExpertWriteTilte="Hire Affordable Writers for A+ Content"/>
      <HelpYouNeed  changeInYouNeedTitle="3 Simple Steps to Order Cheap Essay Online" changeInYouNeedbtn="Place Order"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="What Makes Our Cheap Essay Writing Services Stand Out?" changeInUnmatedp="Discover Why We are the Best Essay Writing Service" />
      <BestAssignmentWiter changeInExpertWriteP="" changeInExpertWriteTilte="What Makes Our Cheap Essay Writing Services Stand Out?"/> 
      <WhatStudentSayAboutUs changeInP="Explore Why Millions of Students Rely on Us for Guidance. " changeTitle="Check What Students Have to Say"/>
      <StuckOnAssignment changeInP="Buy Essay Cheap and Get Amazing Grades Guaranteed." changeTitle="Get A-Rated Essays from Top-Rated Scholars"/>
      <AffordablePricing changeInP="Hire Top Scholars to Write Essays at an Affordable Price." changeTitle="Enjoy the Cheapest Essay Writing Services" /> 
      <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"}  changeTitle={"5% Cashback"}/>  
      <Footer />  
    </>
  );
};

export default page;
