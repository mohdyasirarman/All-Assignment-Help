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
import WritingTool from "@/components/landing-page/writingTool";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";


const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="Research Paper Writing Service" changeInP="Get research paper help from writers with discipline-specific expertise." />
      <WhyStudentTrustUs />
      <BestAssignmentWiter changeInExpertWriteP={`Know our writers before requesting, "Please write my research paper.”`} changeInExpertWriteTilte="Our Team of Research Paper Writers"/>
      <HelpYouNeed  changeInYouNeedTitle="Get Professional Research Paper Writing Service In 3 Easy Steps" changeInYouNeedbtn="Place an Order"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="Why Choose Our Research Paper Writing Service?" changeInUnmatedp="Request for paper help & get a bag full of benefits." />
      <BestAssignmentWiter changeInExpertWriteP="Discover the Best Professional Writers to Guarantee You an A+." changeInExpertWriteTilte="Hire Affordable Writers for A+ Content"/>
      <WhatStudentSayAboutUs changeInP="Skeptical about our writers? Check our service reviews to decide." changeTitle="'Students' Reviews of Our Research Paper Help Service"/>
      <StuckOnAssignment changeInP="Consult us to get hand-held support with your term paper." changeTitle="We Promise the Highest Grades"/>
      <AffordablePricing changeInP="Pay less and gain more with our online research paper writing help." changeTitle="Research Paper Help for All Subjects " /> 
      <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"}  changeTitle={"5% Cashback"}/>  
      <Footer /> 
    </>
  );
};

export default page;
