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
      question: "What are the key advantages of using 'Academic Writing Assistance'?",
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
    { name: "Essay Writing Support", originalPrice: "149.99", discountedPrice: "FREE" },
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
    { name: "Unlimited Academic Writing Help", originalPrice: "249.99", discountedPrice: "FREE" },
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
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Writing Assistance: Expert Support for Success"}
        changeInP={"Receive help with academic writing, to ensure high-quality outcomes."}
        isboy={false}
      />
      <AcademicNeeds
        title="Comprehensive Assistance for Writing Needs, "
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
      <Features/>
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
