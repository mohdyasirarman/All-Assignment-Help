import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";



const page = () => {
  return (
    <>
      <AssignmentHelp changeInForm="Get instant help from 5000+ experts for" changeInH="Essay Writing Help - Essays Help Online" changeInP="Polish Your Penmanship Skills with an Essay Writing Helper Online" />
      <BestAssignmentWiter changeInExpertWriteP="Get Custom Writing Guidance from the Best Essay Expert" changeInExpertWriteTilte="Essay Writing Service Powered by Top Essay Tutors"/>
      <HelpYouNeed  changeInYouNeedTitle="Get Help with Writing an Essay in Simple Steps" changeInYouNeedbtn="Hire Tutor"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Real-Time Essay Writing Help" changeInUnmatedp="Master the Art of Creative Writing as You Unlock Many Perks" />
      <AffordablePricing changeInP="Get Paper Writing Services in the Form of Step-by-Step Guidance" changeTitle="All-Encompassing Help from Our Online Paper Writers" /> 
      <FAQS />
      <UnlockExpertHelp changeInP={"On APP - grab it while it lasts!"}  changeTitle={"5% Cashback"}/>  
      <Footer /> 
    </>
  );
};

export default page;
