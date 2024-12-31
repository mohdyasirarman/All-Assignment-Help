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

  const title = "Need Someone to Do Assignment? ";
  const buttons = [
    "Do My Assignment",
    "Complete My Assignment",
    "Help with Assignment Formatting",
    "Tailored assignment",
    "Proofread Assignment",
    "Provide Assignment Guidance",
    "Assist with Research for Assignment",
  ];

  const sections = [
    {
      title: "Custom Assignment Solutions",
      description: 
        "We offer tailored assignment help that meets your specific academic requirements, ensuring high-quality results.",
      number: "100%",
    },
    {
      title: "Professional Experts",
      description: 
        "Our team of seasoned professionals is ready to handle your assignments across various academic disciplines.",
      number: "250+",
    },
    {
      title: "Deadline-Oriented",
      description: 
        "We understand the importance of deadlines and deliver your assignments on time, every time.",
      number: "98%",
    }
  ];

  const questions = [
    {
      question: "What does your assignment help service include?",
      answer:
        "Our service includes writing original assignments, formatting, editing, research assistance, and guidance tailored to your academic needs.",
    },
    {
      question: "Who completes the assignments?",
      answer:
        "Our team consists of qualified experts with advanced degrees and experience in completing assignments across various subjects.",
    },
    {
      question: "Can I request revisions for my assignment?",
      answer:
        "Yes, we offer free revisions to ensure your assignment meets your academic standards and expectations.",
    },
    {
      question: "What is the typical delivery time for an assignment?",
      answer:
        "We offer flexible timelines to accommodate both urgent and standard assignments, ensuring timely delivery.",
    },
    {
      question: "How do you ensure my information is kept confidential?",
      answer:
        "We prioritize your privacy and implement strict measures to protect your personal and assignment-related information.",
    },
    {
      question: "Can I communicate with the expert?",
      answer:
        "Yes, you can communicate directly with the expert to ensure the assignment meets your requirements and expectations.",
    },
    {
      question: "Do you handle urgent assignment requests?",
      answer:
        "Yes, we are equipped to handle urgent assignment requests while maintaining high quality.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy. Just share your assignment details and deadline with us, and we’ll take care of the rest.",
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

  return (
    <>
      <HeroSectionNew 
        changeInH={"Get Expert Help to Do Assignment"} 
        changeInP={"Let experienced team handle assignments while focus on other priorities."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts experts={customExperts} />
      <ThingAboutUs />
      <Features />
      <HowItWorks />
      <WhatStudentSayAboutUs 
        changeInP={"Read how students succeeded with their assignments using our professional help."} 
        changeTitle={"What Our Clients Say About Us"} 
      />
      <AffordablePrice />
      <FAQS questions={questions} />
      <UnlockExpertHelp />
      <Footer />          
    </>
  );
}
