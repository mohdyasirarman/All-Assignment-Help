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
          <AssignmentHelp changeInForm="" changeInH="PowerPoint Presentation Writing Services" changeInP="Hire Our PowerPoint Presentation Writers for Visually Appealing PPTs" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="How to Pay for PowerPoint Presentations" changeInYouNeedbtn="Sign Up"/>
          <BestAssignmentWiter changeInExpertWriteP="Here’s Why Our Professional Writers Are Your Best Choice" changeInExpertWriteTilte="Our Team of PowerPoint Presentation Writers"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Guarantees of Our PowerPoint Presentation Services" changeInUnmatedp="Here is Why You Should Hire Our Expert Writing Service" />
          <WhatStudentSayAboutUs changeInP="Have a Glance at What Our Previous Users Say" changeTitle="What Our Clients Think About Us"/>
          <StuckOnAssignment changeInP="Presentation Writing Service by Learned Experts at MyAssignmenthelp" changeTitle="Ask Experts For PowerPoint Presentation Service"/>
          <AffordablePricing changeInP={"We Do Everything Related to Editing Custom Presentation"} changeTitle={"“Write My PowerPoint Presentation” At Affordable Prices"} />  
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
