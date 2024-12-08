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
          <AssignmentHelp  changeInH="Thesis Help By PhD Experts" changeInP="The Best Thesis Writing Service in the UK from Professionals in a Click" />
          <WhyStudentTrustUs />
          <HelpYouNeed  changeInYouNeedTitle="Get Professional Thesis Writing Service in 3 Easy Steps" changeInYouNeedbtn="Order Now"/>
          <BestAssignmentWiter changeInExpertWriteP="Here are our Top-Rated Writers of This Month" changeInExpertWriteTilte="Meet Our Team of Thesis Writers"/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="Why Choose Our Thesis Writing Service?" changeInUnmatedp="Check Out Some of Our Most Exciting Features" />
          <WhatStudentSayAboutUs changeInP="Based on 33,845 Genuine Reviews with an Outstanding 4.9/5 Rating" changeTitle="Top Scholars' Reviews & Ratings on Thesis Help "/>
          <StuckOnAssignment changeInP="Get Expert Thesis Help in the UK from the Web’s Most Pocket-Friendly Service" changeTitle="Get Thesis Help at Affordable Prices"/>  
          <AffordablePricing changeInP={"All-Encompassing Assistance Await All Students"} changeTitle={"What Subjects Are Covered in our Online Thesis Writing Service?"} />  
          <UnlockExpertHelp />  
          <Footer />
    </div>
  );
}
