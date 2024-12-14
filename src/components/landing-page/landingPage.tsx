import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import HeroSectionNew from "./HeroSectionNew";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import HowItWorks from "@/components/landing-page/howitworks";
import AffordablePrice from '@/components/landing-page/affordableprice';
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import Experts from "./experts";
import Features from "./features";
import WritingTool from "./writingTool";
import ComprehensiveHelp from "./comprehensiveHelp";



export default function LandingPage() {
  return (
    <>
          <HeroSectionNew changeInH={""} changeInP={""} isboy={true}/>
          <AcademicNeeds/>
          <WhyStudentTrustUs/>  
          <Experts/>
          <ThingAboutUs />
          <Features/>
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP="" changeTitle=""/>
          <ComprehensiveHelp/>
          <AffordablePrice />
          <WritingTool/>
          <FAQS />
          <UnlockExpertHelp />  
          <Footer />
    </>
  );
}
