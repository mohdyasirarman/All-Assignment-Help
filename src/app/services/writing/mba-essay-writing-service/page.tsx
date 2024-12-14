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

  const title = "Need Help with Your MBA Essay? " ;
  const buttons = [
    "Write My MBA Essay",
    "Edit My MBA Essay",
    "Help with MBA Essay Formatting",
    "Proofread My MBA Essay",
    "Assist with MBA Research",
    "Provide MBA Essay Guidance",
    "Support for Other MBA Writing Needs",
  ];

  const sections =  [
    {
      title: "Customized Essays",
      description: 
        "We tailor each MBA essay to match your unique requirements and goals, ensuring a personalized and impactful essay.",
      number: "100%",
    },
    {
      title: "Professional Writers",
      description: 
        "Our writers specialize in MBA admissions and academic writing, bringing expertise and experience to your essay.",
      number: "150+",
    },
    {
      title: "Timely Delivery",
      description: 
        "Deadlines are crucial. We ensure your MBA essay is delivered promptly, giving you peace of mind.",
      number: "99%",
    }
  ];

  const questions = [
    {
      question: "What does your MBA essay writing service include?",
      answer:
        "Our service includes personalized MBA essays, expert editing, and detailed formatting to meet application standards.",
    },
    {
      question: "Are your writers experienced in MBA applications?",
      answer:
        "Yes, our writers are well-versed in MBA application processes and have extensive experience crafting essays for top programs.",
    },
    {
      question: "Can I request revisions for my MBA essay?",
      answer:
        "Absolutely! We provide free revisions to ensure your essay aligns perfectly with your expectations.",
    },
    {
      question: "What is the turnaround time for an MBA essay?",
      answer:
        "We offer flexible deadlines tailored to your needs, from urgent requests to standard delivery times.",
    },
    {
      question: "How do you ensure the confidentiality of my information?",
      answer:
        "We take privacy seriously and guarantee the security of your personal and essay details.",
    },
    {
      question: "Can I communicate with the writer?",
      answer:
        "Yes, you can collaborate directly with your writer to ensure your essay reflects your voice and vision.",
    },
    {
      question: "Do you handle urgent MBA essay requests?",
      answer:
        "Yes, our team is equipped to handle urgent requests while maintaining exceptional quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply provide us with your essay requirements and deadlines through our website to get started.",
    }
  ];

  return (
    <>
          <HeroSectionNew changeInH={"Craft Your Perfect MBA Essay with Ease"} changeInP={"Expert guidance and professional writers to elevate your MBA application."} isboy={false}/> 
          <AcademicNeeds title={title} buttons={buttons} /> 
          <WhyStudentTrustUs sections={sections} />
          <Experts/>
          <ThingAboutUs />
          <Features/>
          <HowItWorks/>
          <WhatStudentSayAboutUs changeInP={"Discover how we’ve helped MBA applicants succeed."} changeTitle={"What Students Say About Us"}/>
          <AffordablePrice />
          <FAQS  questions={questions}/>
          <UnlockExpertHelp />  
          <Footer />          
    </>
  );
}
