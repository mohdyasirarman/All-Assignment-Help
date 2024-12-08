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
          <AssignmentHelp  changeInH="Pay Someone to Do My Homework Online" changeInP="Who Will Do My Homework for Me? None Other than MyAssignmenthelp!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Do Your Homework Assignment In 3 Simple Steps" changeInYouNeedbtn="Get Started Today"/>
          <BestAssignmentWiter changeInExpertWriteP="Meet Our Team of Experienced Writers Having Extensive Insights." changeInExpertWriteTilte="Our Experienced Homework Writers at MyAssignmenthelp"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="What Makes You the Right Choice to Do My Homework?" changeInUnmatedp="Dive Into a Myriad Of “Do My Homework” Perks and Exclusivities." />
          <WhatStudentSayAboutUs changeInP="Words Of Gratitude and Appreciation from Happy Customers." changeTitle="Discover What Our Clients Say About Our Do My Homework for Me Service"/>
          <StuckOnAssignment changeInP="“Can you do my homework online?” – It’s a big YES!" changeTitle="Ready to Get Started? We Write Your Homework Easily!"/>
          <AffordablePricing changeInP={"Unlock “Hire someone to do my homework” Perks For Every Academic Level."} changeTitle={"Transparent Pricing for"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
