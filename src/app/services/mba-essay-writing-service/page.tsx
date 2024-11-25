import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";

const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="MBA Essay Writing Service " changeInP="Buy an Essay for Business School that Unleashes Potential" />
      <BestAssignmentWiter changeInExpertWriteP="Get your essays perfected by top MBA writers" changeInExpertWriteTilte="Wide Range of Professional MBA Essay Writers"/>
      <HelpYouNeed  changeInYouNeedTitle="Steps to Get an MBA Essay Writing Service" changeInYouNeedbtn="Click To Connect"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="Benefits and Guarantees of Our MBA Essay Writing Service" changeInUnmatedp="Order Now" />
      <WhatStudentSayAboutUs changeInP="Hear how our well-crafted essays can help you write an MBA success story" changeTitle="Reviews About Our Services"/>
      <StuckOnAssignment changeInP="Empowering Dreams: MBA Papers Done Right at Economical Rates." changeTitle="Get Professional MBA Essay Writing Service Today"/>
      <AffordablePricing changeInP="Seeking MBA Admission Essay Writing Service Won’t Ever Put a Dent in the Wallet" changeTitle="MBA Essays at Affordable Prices" /> 
      <FAQS />
      <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"}  changeTitle={"5% Cashback"}/>  
      <Footer />  
    </>
  );  
};

export default page;
