import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import HowItWorks from "@/components/landing-page/howitworks";
import AffordablePrice from '@/components/landing-page/affordableprice';
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";

export default function Page() {
  return (
    <>
         <HeroSectionNew changeInH={""} changeInP={""} isboy={false} />
          <AcademicNeeds/>
          <WhyStudentTrustUs/>
          <ThingAboutUs />
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP="" changeTitle=""/>
          <AffordablePrice />
          <WritingTool />
          <FAQS />
          <UnlockExpertHelp />  
          <Footer />          
    </>
  );
}
