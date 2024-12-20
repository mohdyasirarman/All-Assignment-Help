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

  const title = "Need Help with College Homework? ";
  const buttons = [
    "Complete Homework",
    "Edit Homework",
    "Help with Homework Formatting",
    "Proofread Homework",
    "Provide Homework Guidance",
    "Assist with Problem Solving",
    "Support for Other Homework Needs",
  ];

  const sections = [
    {
      title: "Tailored Homework Solutions",
      description: 
        "We provide customized homework help that aligns with your specific college assignments and subject requirements.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team comprises experienced experts in various academic disciplines, ready to assist with your college homework.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the pressure of homework deadlines and ensure timely delivery, so you stay stress-free.",
      number: "98%",
    }
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

  const questions = [
    {
      question: "What does your college homework help service include?",
      answer:
        "Our service includes writing and editing homework assignments, problem-solving, and guidance tailored to your academic needs.",
    },
    {
      question: "Who helps with the homework?",
      answer:
        "Our team consists of experienced experts with advanced degrees, ready to provide support for various college homework tasks.",
    },
    {
      question: "Can I request revisions for my homework?",
      answer:
        "Yes, we provide free revisions to ensure your homework meets your expectations and academic standards.",
    },
    {
      question: "What is the typical delivery time for homework help?",
      answer:
        "We offer flexible deadlines, from urgent requests to standard timelines, to suit your schedule.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We prioritize privacy and implement robust measures to protect your personal and academic information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can directly collaborate with the expert to ensure the homework aligns with your instructions and expectations.",
    },
    {
      question: "Do you handle urgent homework requests?",
      answer:
        "Yes, we are equipped to handle urgent homework requests without compromising on quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Just share your homework requirements and deadlines, and we’ll handle the rest.",
    }
  ];

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Expert Help with College Homework"} 
        changeInP={"Receive professional assistance to complete college homework successfully."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts experts={customExperts} />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Hear from students who successfully completed their homework with our help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
