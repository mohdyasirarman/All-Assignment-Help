import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import ComprehensiveHelp from "@/components/landing-page/comprehensiveHelp";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import HeroSectionNew from "./HeroSectionNew";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import HowItWorks from "@/components/landing-page/howitworks";
import AffordablePrice from '@/components/landing-page/affordableprice';
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import Features from "@/components/landing-page/features";
import Experts from "@/components/landing-page/experts";
import TrendingTopics from "@/components/landing-page/trendingtopics";

export default function LandingPage() {
  return (
    <>
          <HeroSectionNew changeInH={""} changeInP={""}/>
          <WhyStudentTrustUs/>
          <HelpYouNeed  changeInYouNeedTitle="" changeInYouNeedbtn=""/>
          <BestAssignmentWiter changeInExpertWriteP="" changeInExpertWriteTilte=""/>
          <UnmatchedAcademicSuccess changeInUnmatedTite="" changeInUnmatedp="" />
          <WhatStudentSayAboutUs changeInP="" changeTitle=""/>
          <StuckOnAssignment changeInP="" changeTitle=""/>
          <ComprehensiveHelp />   
          <AffordablePricing changeInP={""} changeTitle={""} /> 
          <WritingTool />
          <FAQS />
          <UnlockExpertHelp />  
          <Footer />
          <AcademicNeeds/>
          <HowItWorks/>
          <AffordablePrice />
          <ThingAboutUs />
          <Features />
          <Experts />
          <TrendingTopics />
    </>
  );
}
