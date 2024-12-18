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

export default function Page() {
  const title = "Need Help with Research Paper ";
  const buttons = [
    "Write My Research Paper",
    "Edit My Research Paper",
    "100% original",
    "Help with Formatting",
    "Proofread My Research Paper",
    "Assist with Research",
    "Provide Writing Guidance",
  ];

  const sections = [
    {
      title: "Plagiarism-Free Work",
      description: 
        "We deliver 100% original research papers tailored to your instructions, ensuring proper citations and references.",
      number: "100%",
    },
    {
      title: "Expert Writers",
      description: 
        "Our professional writers are well-versed in various academic disciplines to provide top-notch research papers.",
      number: "300+",
    },
    {
      title: "Timely Delivery",
      description: 
        "We respect deadlines and ensure your paper is delivered on time, giving you ample time to review it.",
      number: "99%",
    }
  ];

  const questions = [
    {
      question: "What does your research paper writing service include?",
      answer:
        "Our service includes crafting original research papers, thorough editing, and precise formatting to meet academic standards.",
    },
    {
      question: "Are your writers experienced in academic research?",
      answer:
        "Yes, our team includes seasoned writers with expertise in various academic fields to deliver high-quality papers.",
    },
    {
      question: "Can I request revisions for my research paper?",
      answer:
        "Absolutely! We offer free revisions to ensure your paper meets your exact requirements.",
    },
    {
      question: "What is the turnaround time for a research paper?",
      answer:
        "We offer flexible deadlines tailored to your needs, including options for urgent requests and standard delivery times.",
    },
    {
      question: "How do you ensure the confidentiality of my information?",
      answer:
        "We prioritize your privacy by securing all personal and academic details shared with us.",
    },
    {
      question: "Can I collaborate with the writer?",
      answer:
        "Yes, you can directly communicate with your writer to ensure the paper aligns with your vision.",
    },
    {
      question: "Do you handle urgent research paper requests?",
      answer:
        "Yes, we are equipped to manage urgent requests while maintaining high-quality standards.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Provide us with your requirements and deadlines through our website to begin.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Craft Perfect Research Paper with Ease"} 
        changeInP={"Expert assistance for professional, high-quality research."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <ThingAboutUs />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"See how research paper writing service has helped others."} 
        changeTitle={"What Students Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
