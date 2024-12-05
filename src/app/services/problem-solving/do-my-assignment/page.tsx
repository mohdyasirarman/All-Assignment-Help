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
          <AssignmentHelp changeInForm="" changeInH="Do My Assignment" changeInP="“Where Do I Pay Someone To Do My Assignment For Me?” Contact Us Now!" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Fast & Efficient Ordering Process" changeInYouNeedbtn="Place Your Order!"/>
          <BestAssignmentWiter changeInExpertWriteP="Meet The Top-Rated Assignment Writers Of This Month" changeInExpertWriteTilte="Top-Notch Assignment Writers at Your Service"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Discover the Benefits of Choosing My Assignment Help" changeInUnmatedp="Experience World-Class Academic Assistance Along With Awesome Perks" />
          <WhatStudentSayAboutUs changeInP="Students Across the US Acclaimed Our Assignment Writing Services" changeTitle="Thousands of Positive Reviews from Satisfied Students"/>
          <StuckOnAssignment changeInP="Avail of Top-Notch Support at the Lowest Rates at Our Writing Service" changeTitle="Yes, We Can Do Your Assignment Better Than Ever. Let’s Get Started!"/>
          <AffordablePricing changeInP={"Enjoy a Wide Range of Services at Affordable Rates"} changeTitle={"Explore Our Services and Pricing Plans"} /> 
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
