import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import WritingTool from "@/components/landing-page/writingTool";

const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="Research Proposal Writing Service" changeInP="Get the perfect research proposal written by PhD experts." />
      <BestAssignmentWiter changeInExpertWriteP="A team of elite writers are here to take your worries away " changeInExpertWriteTilte="Top PhD Research Proposal Writers  "/>
      <HelpYouNeed  changeInYouNeedTitle="How to Place an Order for PhD Proposal Help? " changeInYouNeedbtn="Share your requirements"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Our Dissertation Proposal Writing Services" changeInUnmatedp="Enjoy amazing benefits for availing research proposal writing services" />
      <WhatStudentSayAboutUs changeInP="Reviews that set us apart from other websites" changeTitle="What Other Customers Say"/>
      <StuckOnAssignment changeInP="Avail the best research proposal writing services for perfect grades." changeTitle="Buy a Dissertation Proposal from PhD Writers"/>
      <AffordablePricing changeInP="Take a look at the subjects our research proposal experts cover:" changeTitle="Research Proposal Writing Service Prices & Free Features" /> 
      <WritingTool />
      <FAQS/>
      <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"}  changeTitle={"5% Cashback"}/>  
      <Footer /> 
    </>
  );
};

export default page;
