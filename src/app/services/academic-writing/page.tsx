import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";


const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="Academic Writing Services" changeInP="Step Up Your Academic Writing Game With Our Services" />
      <BestAssignmentWiter changeInExpertWriteP="Meet Our Talented Professional Academic Writers." changeInExpertWriteTilte="Our Top Academic Writers"/>
          <HelpYouNeed  changeInYouNeedTitle="How to Get Professional Academic Writing Services" changeInYouNeedbtn="Order Now"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Our Academic Writing Service" changeInUnmatedp="Here’s What Makes Our Online Academic Writing Service the Best" />
          <WhatStudentSayAboutUs changeInP="The Certificate of Competence of Our Services" changeTitle="Reviews of Our Services"/>
          <StuckOnAssignment changeInP="Learn How Our Expert Writers Create Impeccable Assignments with a Click!" changeTitle="Hire an Academic Writer Online Today"/>
          <AffordablePricing changeInP={"Get Top Quality Professional Help at the Most Affordable Prices"} changeTitle={"High-Quality Academic Writing Services at the Best Price"} /> 
          <FAQS  />
          <WritingTool />
          <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"} changeTitle={"5% Cashback"}/>  
          <Footer />
    </>
  );
};

export default page;
