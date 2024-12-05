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
          <AssignmentHelp changeInForm="" changeInH="Online Assessment Help for Students" changeInP="Meet Top Professionals To Get Help For Assessment Solutions & More" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Place An Order For Assessment Help In 3 Simple Steps" changeInYouNeedbtn=""/>
          <BestAssignmentWiter changeInExpertWriteP="Zero AI Assessment Help by the Best Minds" changeInExpertWriteTilte="Meet Our Online Assessment Helpers"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Reasons Why You Need Our Assessment Help Services" changeInUnmatedp="The Services at MyAssignmenthelp Come with Amazing Perks" />
          <WhatStudentSayAboutUs changeInP="Wondering to Choose Us or Not? Read What Our Clients Say" changeTitle="Customer Reviews About Our Assessment Helper"/>
          <StuckOnAssignment changeInP="Grab Online Assessment Help from the World’s Best Academic Service" changeTitle="Looking For My Assessment Assistance?"/>
          <AffordablePricing changeInP={"End Your Search for Budget-Friendly Assessment Assistance"} changeTitle={"The Best Prices For All Assessment Help For Students"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
