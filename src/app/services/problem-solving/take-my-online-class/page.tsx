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
          <AssignmentHelp  changeInH="Take My Online Class for Me" changeInP="Seek online class help to build a strong foundation for lifelong learning." />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Why Choose You to Do My Online Class?" changeInYouNeedbtn="Learn More"/>
          <BestAssignmentWiter changeInExpertWriteP="" changeInExpertWriteTilte=""/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="" changeInUnmatedp="" />
          <WhatStudentSayAboutUs changeInP="Read Why So Many Students Rely on Our Online Class Help " changeTitle="Review of Students Who Told Us Take My Class for Me"/>
          <StuckOnAssignment changeInP="Join the Bandwagon Today by Sending a “Do My Online Class” Request " changeTitle="Reliable Online Class Help with High Service Ratings"/>
          <AffordablePricing changeInP={""} changeTitle={`Our Experts Work on All Learning Management Systems`} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
