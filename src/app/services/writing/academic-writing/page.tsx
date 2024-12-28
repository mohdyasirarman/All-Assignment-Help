import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";
import Experts from "@/components/landing-page/experts";
import Features from "@/components/landing-page/features";

export default function Page() {
  const question = [
    {
      question: "What is the 'Academic Writing Assistance' service?",
      answer:
        "'Academic Writing Assistance' offers comprehensive support, connecting students with expert writers who assist in producing high-quality written content, tailored to academic standards and deadlines.",
    },
    {
      question: "Why should I use the 'Academic Writing Assistance' service?",
      answer:
        "This service is essential for students facing challenges with time management, research, or writing quality. By utilizing our assistance, students ensure their academic tasks are completed efficiently, meeting stringent academic standards.",
    },
    {
      question: "What types of academic writing tasks can I get help with?",
      answer:
        "Our service caters to a wide range of academic writing tasks, including essays, research papers, dissertations, literature reviews, and more. We provide assistance across multiple disciplines such as science, business, literature, and social studies.",
    },
    {
      question: "How does the 'Academic Writing Assistance' service work?",
      answer:
        "Simply submit the details of your assignment, including specific guidelines, subject matter, and deadlines. Our experts will handle the task, ensuring the work is delivered to your expectations and within the stipulated time frame.",
    },
    {
      question: "Who can benefit from 'Academic Writing Assistance'?",
      answer:
        "Students at all academic levels, professionals seeking help with research projects, and anyone looking to improve their academic writing skills will benefit from this service.",
    },
    {
      question:
        "What are the key advantages of using 'Academic Writing Assistance'?",
      answer:
        "The main advantages include high-quality writing tailored to academic standards, timely delivery, and expert guidance on structuring and referencing work to meet specific academic requirements.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Academic Writing Assistance",
    title: "Writing Assistance:Expert Support for Success",
    description:
      "Don't let academic  challenges hold you back. Our team of  writers ensures  assignments are completed to  highest standards.",
    items: [
      "Receive expert support in academic writing, including research, writing, and formatting.",
      "Ensure high-quality results for essays, reports, dissertations, and other academic tasks.",
    ],
    buttonText: "Request Academic Assistance",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Academic Writers",
    title: "Academic Writing Help: Focus on Your Academic Excellence",
    description:
      "Collaborate with professional academic writers who specialize in crafting well-researched, clearly articulated academic documents.",
    items: [
      "Work with professionals to improve your writing, research, and overall academic performance.",
      "Benefit from expert advice on structuring and referencing academic content.",
    ],
    buttonText: "Get Expert Writing Assistance",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Comprehensive Academic Writing Assistance",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    {
      name: "Essay Writing Support",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    {
      name: "Research Paper Guidance",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    {
      name: "Dissertation Support",
      originalPrice: "189.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Preparation Writing Assistance",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Unlimited Academic Writing Help",
      originalPrice: "249.99",
      discountedPrice: "FREE",
    },
  ];

  const customExperts = [
    {
      name: "Jane Smith",
      expertise: "Mathematics",
      description: "Expert in advanced calculus and statistical analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "Singapore",
      rating: "4.9/5",
      about:
        "Experienced mathematician specializing in problem-solving and data modeling.",
    },
    {
      name: "Michael Brown",
      expertise: "Computer Science",
      description:
        "Specialized in AI, machine learning, and big data analytics.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Innovative computer scientist focusing on artificial intelligence and cutting-edge technology.",
    },
    {
      name: "Emily Davis",
      expertise: "Chemistry",
      description:
        "Focused on organic synthesis and material science research.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "UK",
      rating: "4.6/5",
      about:
        "Chemistry expert with a passion for creating novel materials and advancing chemical processes.",
    },
    {
      name: "David Wilson",
      expertise: "Economics",
      description: "Expert in macroeconomic policy and financial markets.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 3,
      location: "India",
      rating: "4.8/5",
      about:
        "Economist with extensive experience in global financial systems and policy formulation.",
    },
    {
      name: "Sarah Johnson",
      expertise: "Biology",
      description: "Specialized in molecular biology and genetic engineering.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 5,
      location: "US",
      rating: "5.0/5",
      about:
        "Biologist with expertise in genetic research and advancements in molecular techniques.",
    },
    {
      name: "William Martinez",
      expertise: "Environmental Science",
      description: "Focused on climate change modeling and sustainability.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 2,
      location: "Canada",
      rating: "4.7/5",
      about:
        "Environmental scientist dedicated to finding sustainable solutions for climate challenges.",
    },
    {
      name: "Olivia Taylor",
      expertise: "Psychology",
      description: "Expert in cognitive behavioral therapy and mental health.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 4,
      location: "UK",
      rating: "4.9/5",
      about:
        "Psychologist specializing in therapeutic approaches for mental wellness and personal growth.",
    },
    {
      name: "Alexander Moore",
      expertise: "Astrophysics",
      description:
        "Researcher in black holes, dark matter, and the origins of the universe.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 1,
      location: "US",
      rating: "4.6/5",
      about:
        "Astrophysicist with a deep focus on space phenomena and the mysteries of the cosmos.",
    },
    {
      name: "Sophia Anderson",
      expertise: "Education",
      description:
        "Specialized in curriculum development and learning strategies.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 2,
      location: "Australia",
      rating: "4.8/5",
      about:
        "Education expert designing innovative teaching methods to enhance learning outcomes.",
    },
    {
      name: "Ethan Carter",
      expertise: "Philosophy",
      description: "Expert in ethics, logic, and existential theories.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 1,
      location: "US",
      rating: "4.9/5",
      about:
        "Philosopher passionate about exploring the depths of human thought and moral dilemmas.",
    },
    {
      name: "Isabella Lee",
      expertise: "Literature",
      description:
        "Focused on contemporary literary analysis and creative writing.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 3,
      location: "UK",
      rating: "4.7/5",
      about:
        "Literature expert with a love for analyzing modern texts and fostering creative expression.",
    },
    {
      name: "Lucas Harris",
      expertise: "Engineering",
      description: "Specialized in robotics and automation systems.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 2,
      location: "Germany",
      rating: "4.8/5",
      about:
        "Engineer focused on developing intelligent machines and enhancing automation across industries.",
    },
    {
      name: "Amelia Scott",
      expertise: "Sociology",
      description: "Expert in urban sociology and social behavior analysis.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "Canada",
      rating: "4.6/5",
      about:
        "Sociologist with a keen interest in understanding social structures and urban dynamics.",
    },
    {
      name: "Benjamin Evans",
      expertise: "Political Science",
      description: "Focused on international relations and public policy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2014,
      orderInProgress: 4,
      location: "US",
      rating: "4.7/5",
      about:
        "Political scientist analyzing global trends and shaping policies for international cooperation.",
    },
    {
      name: "Charlotte Thompson",
      expertise: "Art History",
      description: "Specialized in Renaissance and modern art movements.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2016,
      orderInProgress: 2,
      location: "Italy",
      rating: "5.0/5",
      about:
        "Art historian with a deep appreciation for cultural evolution and iconic art periods.",
    },
    {
      name: "Daniel King",
      expertise: "Law",
      description: "Expert in corporate law and intellectual property.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2010,
      orderInProgress: 3,
      location: "US",
      rating: "4.9/5",
      about:
        "Corporate lawyer with a specialization in intellectual property rights and business law.",
    },
    {
      name: "Grace White",
      expertise: "Archaeology",
      description: "Researcher in ancient civilizations and cultural heritage.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2012,
      orderInProgress: 1,
      location: "Egypt",
      rating: "4.8/5",
      about:
        "Archaeologist committed to preserving ancient history and discovering lost civilizations.",
    },
    {
      name: "Liam Rodriguez",
      expertise: "Marketing",
      description: "Specialized in digital marketing and brand strategy.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2015,
      orderInProgress: 3,
      location: "Brazil",
      rating: "4.7/5",
      about:
        "Marketing expert helping brands enhance their presence through strategic digital initiatives.",
    },
    {
      name: "Chloe Walker",
      expertise: "Nutrition",
      description: "Focused on dietetics and sports nutrition.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2013,
      orderInProgress: 2,
      location: "US",
      rating: "4.9/5",
      about:
        "Nutritionist dedicated to optimizing health through personalized diet and nutrition plans.",
    },
    {
      name: "Noah Phillips",
      expertise: "History",
      description: "Expert in medieval history and historical preservation.",
      image: "/static/images/Profile_avatar_placeholder_large.png",
      orderFinished: 2011,
      orderInProgress: 3,
      location: "UK",
      rating: "4.8/5",
      about:
        "Historian specializing in medieval periods and the conservation of cultural landmarks.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Writing Assistance: Expert Support for Success"}
        changeInP={
          "Receive help with academic writing, to ensure high-quality outcomes."
        }
        isboy={false}
      />
      <AcademicNeeds
        title="Assistance for Writing Needs, ?"
        buttons={[
          "Request Writing Assistance Now",
          "Submit Essay for Review",
          "Research Paper Help",
          "Paper Help",
          "Dissertation Assistance",
          "Exam Writing Support",
          "Time Management for Academic Tasks",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Experienced Scholars, Not Machines",
            description:
              "Our services are powered by experienced academics, not automated systems, ensuring your work is handled by experts in the field.",
            number: "100%",
          },
          {
            title: "Accessible 24/7",
            description:
              "Our academic experts are available at any time to assist with your writing, offering flexibility and timely support for your needs.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery of Quality Work",
            description:
              "We ensure that all academic assignments are submitted on time without compromising the quality of work.",
            number: "98%",
          },
        ]}
      />
      <Experts experts={customExperts} />
      <ThingAboutUs section1={section1} section2={section2} />
      <Features />
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
