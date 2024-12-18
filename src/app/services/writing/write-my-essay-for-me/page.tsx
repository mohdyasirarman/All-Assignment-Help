import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import FAQS from "@/components/landing-page/faq";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import HowItWorks from "@/components/landing-page/howitworks";
import AffordablePrice from '@/components/landing-page/affordableprice';
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";
import Experts from "@/components/landing-page/experts";
import Features from "@/components/landing-page/features";


export default function Page() {

  const title = "Need an Essay? We’ll Write It for You, " ;
  const buttons = [
  "Write My Essay for Me",
  "Finish My Course for Me",
  "Get Homework Done",
  "Ace My Online Test",
  "Guide Me Through My Exam",
  "Get Help on My Project",
  "Find Help for Other Academic Needs",
];
const sections =  [
  {
    title: "No Plagiarism",
    description: 
      "Each essay is crafted from scratch to meet your requirements. We guarantee 100% plagiarism-free work with proper citations and references.",
    number: "0%",
  },
  {
    title: "Expert Writers",
    description: 
      "Our team of professional writers specializes in various academic fields, ensuring your essay is written by a subject matter expert.",
    number: "100+",
  },
  {
    title: "On-Time Delivery",
    description: 
      "We understand deadlines are crucial. Your essay will be delivered on time, ensuring you have plenty of time to review and submit.",
    number: "99% ",
  }
]

const questions = [
    {
      question: "What is included in your essay writing service?",
      answer:
        "Our service includes customized essays written to your requirements, proper citations, and plagiarism-free content.",
    },
    {
      question: "How qualified are your essay writers?",
      answer:
        "Our writers are highly qualified professionals with expertise in various academic fields, ensuring top-quality essays.",
    },
    {
      question: "Can I request revisions for my essay?",
      answer:
        "Yes, we offer free revisions to ensure your essay meets your exact expectations and requirements.",
    },
    {
      question: "What is the turnaround time for an essay?",
      answer:
        "We provide flexible deadlines ranging from a few hours to several days, depending on your needs.",
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Absolutely. We take privacy seriously and ensure your personal and project information is secure.",
    },
    {
      question: "Can I communicate with the writer working on my essay?",
      answer:
        "Yes, you can directly communicate with the writer to discuss your essay details and provide feedback.",
    },
    {
      question: "Do you handle urgent essay requests?",
      answer:
        "Yes, we have a team of experts ready to handle urgent tasks while maintaining quality standards.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Placing an order is simple—just provide your essay requirements on our website, and we'll take care of the rest.",
    }
  ];


  return (
    <>
          <HeroSectionNew changeInH={"Get Your Essay,Fast and Easy"} changeInP={"Expert writers delivering high-quality essays tailored to needs."} isboy={false}/> 
          <AcademicNeeds  title={title} buttons={buttons} /> 
          <WhyStudentTrustUs sections={sections} />
          <Experts/>
          <ThingAboutUs />
          <Features/>
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP={""} changeTitle=""/>
          <AffordablePrice />
          <FAQS  questions={questions}/>
          <UnlockExpertHelp />  
          <Footer />          
    </>
  );
}
