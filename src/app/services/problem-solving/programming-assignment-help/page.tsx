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
          <AssignmentHelp  changeInH="Programming Assignment Help" changeInP="Sign up for programming assignment help and get original solutions to bag  best grades!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Navigating the Process of Programming  Help" changeInYouNeedbtn="Book a AutoBot"/>
          <BestAssignmentWiter changeInExpertWriteP="A look at the team of experts who have the right coding skills to help you decode your next assignment:" changeInExpertWriteTilte="Meet Our Programming Assignment Experts"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="MyAssignmenthelp.com: Your Path to Programming Homework Success" changeInUnmatedp="The best services with amazing benefits for students" />
          <WhatStudentSayAboutUs changeInP="Look at what students have to say about our services" changeTitle="Testimonials of Programming Assignment Help"/>
          <StuckOnAssignment changeInP="Sign up without any second thoughts to get the best programming online help now!" changeTitle="Grab the Best Offer for Programming Homework Help Today!"/> 
          <AffordablePricing changeInP={"We offer programming homework help for all kinds of programming tasks, like:"} changeTitle={"Our Prices for Programming Writing Services"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
