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
import ComprehensiveHelp from "@/components/landing-page/comprehensiveHelp";


export default function LandingPage() {
  return (
    <>
          <HeroSectionNew changeInH={""} changeInP={""} isboy={true}/>
          <AcademicNeeds/>
          <WhyStudentTrustUs/>  
          <ThingAboutUs />
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP="" changeTitle=""/>
          <ComprehensiveHelp />
          <AffordablePrice />
          <FAQS />
          <UnlockExpertHelp />  
          <Footer />
          <AcademicNeeds/>
          <HowItWorks/>
          <AffordablePrice />
          <ThingAboutUs />
    </>
  );
}
