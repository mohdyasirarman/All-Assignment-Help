import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";



const page = () => {
  return (
    <>
      <AssignmentHelp  changeInH="Essay Writing Help - Essays Help Online" changeInP="Polish Your Penmanship Skills with an Essay Writing Helper Online" />
      <WhyStudentTrustUs />
      <BestAssignmentWiter changeInExpertWriteP="Get Custom Writing Guidance from the Best Essay Expert" changeInExpertWriteTilte="Essay Writing Service Powered by Top Essay Tutors"/>
      <HelpYouNeed  changeInYouNeedTitle="Get Help with Writing an Essay in Simple Steps" changeInYouNeedbtn="Hire Tutor"/>
      <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Real-Time Essay Writing Help" changeInUnmatedp="Master the Art of Creative Writing as You Unlock Many Perks" />
      <BestAssignmentWiter changeInExpertWriteP="" changeInExpertWriteTilte="What Makes Our Cheap Essay Writing Services Stand Out?"/> 
      <WhatStudentSayAboutUs changeInP="Explore Why Millions of Students Rely on Us for Guidance. " changeTitle="Check What Students Have to Say"/>
      <StuckOnAssignment changeInP="Buy Essay Cheap and Get Amazing Grades Guaranteed." changeTitle="Get A-Rated Essays from Top-Rated Scholars"/>
      <AffordablePricing changeInP="Get Paper Writing Services in the Form of Step-by-Step Guidance" changeTitle="All-Encompassing Help from Our Online Paper Writers" /> 
      <UnlockExpertHelp />  
      <Footer /> 
    </>
  );
};

export default page;
