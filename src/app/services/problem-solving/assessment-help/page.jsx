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

  const title = "Need Help with Your Assessments? ";
  const buttons = [
    "Write My Assessment",
    "Edit My Assessment",
    "Customized assessment",
    "Help with Assessment Formatting",
    "Proofread My Assessment",
    "Provide Assessment Guidance",
    "Assist with Exam Preparation",
  ];

  const customExperts = [
    {
      name: "Jane Smith",
      qualification: "Ph.D. in Mathematics",
      description: "Expert in advanced calculus and statistical analysis.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Michael Brown",
      qualification: "Masters in Computer Science",
      description: "Specialized in AI, machine learning, and big data analytics.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Emily Davis",
      qualification: "Masters in Chemistry",
      description: "Focused on organic synthesis and material science research.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "David Wilson",
      qualification: "Ph.D. in Economics",
      description: "Expert in macroeconomic policy and financial markets.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Sarah Johnson",
      qualification: "Masters in Biology",
      description: "Specialized in molecular biology and genetic engineering.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "William Martinez",
      qualification: "Ph.D. in Environmental Science",
      description: "Focused on climate change modeling and sustainability.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Olivia Taylor",
      qualification: "Masters in Psychology",
      description: "Expert in cognitive behavioral therapy and mental health.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Alexander Moore",
      qualification: "Ph.D. in Astrophysics",
      description: "Researcher in black holes, dark matter, and the origins of the universe.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Sophia Anderson",
      qualification: "Masters in Education",
      description: "Specialized in curriculum development and learning strategies.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Ethan Carter",
      qualification: "Ph.D. in Philosophy",
      description: "Expert in ethics, logic, and existential theories.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Isabella Lee",
      qualification: "Masters in Literature",
      description: "Focused on contemporary literary analysis and creative writing.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Lucas Harris",
      qualification: "Masters in Engineering",
      description: "Specialized in robotics and automation systems.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Amelia Scott",
      qualification: "Ph.D. in Sociology",
      description: "Expert in urban sociology and social behavior analysis.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Benjamin Evans",
      qualification: "Masters in Political Science",
      description: "Focused on international relations and public policy.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Charlotte Thompson",
      qualification: "Ph.D. in Art History",
      description: "Specialized in Renaissance and modern art movements.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Daniel King",
      qualification: "Masters in Law",
      description: "Expert in corporate law and intellectual property.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Grace White",
      qualification: "Ph.D. in Archaeology",
      description: "Researcher in ancient civilizations and cultural heritage.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Liam Rodriguez",
      qualification: "Masters in Marketing",
      description: "Specialized in digital marketing and brand strategy.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Chloe Walker",
      qualification: "Masters in Nutrition",
      description: "Focused on dietetics and sports nutrition.",
      image: "/static/images/headphoneGirl.png",
    },
    {
      name: "Noah Phillips",
      qualification: "Ph.D. in History",
      description: "Expert in medieval history and historical preservation.",
      image: "/static/images/headphoneGirl.png",
    },
  ];

  const sections = [
    {
      title: "Tailored Assessments",
      description: 
        "We provide customized assessment help that aligns with your academic and subject requirements.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team comprises experienced professionals with expertise in various academic disciplines, ready to assist with assessments.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the importance of deadlines and ensure timely delivery of your assessments, so you can stay stress-free.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your assessment help service include?",
      answer:
        "Our service includes writing original assessments, accurate formatting, and thorough editing tailored to your academic standards.",
    },
    {
      question: "Who helps with the assessments?",
      answer:
        "Our team consists of experts with advanced degrees and extensive experience in writing and assisting with assessments.",
    },
    {
      question: "Can I request revisions for my assessment?",
      answer:
        "Yes, we provide free revisions to ensure your assessment meets your expectations.",
    },
    {
      question: "What is the typical delivery time for an assessment?",
      answer:
        "We offer flexible deadlines, from urgent requests to standard timelines, to accommodate your needs.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We take privacy seriously, implementing robust measures to safeguard your personal and academic information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can directly collaborate with the expert to ensure your assessment meets your specific requirements.",
    },
    {
      question: "Do you handle urgent assessment requests?",
      answer:
        "Yes, we can handle urgent assessment requests without compromising on quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy. Simply share your requirements and deadlines through our platform, and we'll handle the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Your Assessments with Expert Help"} 
        changeInP={"Get professional assistance to ensure high-quality assessments."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts experts={customExperts} />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students who improved their grades with our assessment help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
