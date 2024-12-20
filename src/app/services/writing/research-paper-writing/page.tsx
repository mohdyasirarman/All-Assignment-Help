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
        changeInH={"Craft Perfect Research Paper with Ease"} 
        changeInP={"Expert assistance for professional, high-quality research."} 
        isboy={false} 
      />
      <AcademicNeeds title={title} buttons={buttons} />
      <WhyStudentTrustUs sections={sections} />
      <Experts experts={customExperts} />
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
