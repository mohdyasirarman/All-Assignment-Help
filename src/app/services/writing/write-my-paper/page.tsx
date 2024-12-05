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

export default function Page() {
  return (
    <div className="w-full ">
          <AssignmentHelp changeInForm="" changeInH="Write My Paper for Me" changeInP="Wondering “Can someone write paper for me?” Yes, we can!" />
          <WhyStudentTrustUs />
          <BestAssignmentWiter changeInExpertWriteP="Book qualified writers to guarantee an A+ in academic papers." changeInExpertWriteTilte="Meet Our Professional Paper Writers"/>
          <HelpYouNeed  changeInYouNeedTitle="How To Get My Paper Written?" changeInYouNeedbtn="Book a solution "/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Key Benefits Of Our “Write My Paper” Service" changeInUnmatedp="Discover why students trust our professional paper writing service." />
          <WhatStudentSayAboutUs changeInP="Find out why we have numerous satisfied customers" changeTitle="Straight from the Customers’ Mouths"/>
          <StuckOnAssignment changeInP="Get top-notch solutions to all your assignments from professional writers." changeTitle="Place Your Order Here For Best Results"/>
          <AffordablePricing changeInP={"Enjoy jaw-dropping prices whenever you book our paper writing services."} changeTitle={"Friendly Prices For Quality Papers"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
