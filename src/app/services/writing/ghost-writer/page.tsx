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
      question: "What is 'Ghostwriting'?",
      answer:
        "Our 'Ghostwriting' service allows you to work with professional writers who craft high-quality content on your behalf, without crediting them for the work. Perfect for blogs, books, essays, speeches, and more.",
    },
    {
      question: "Why should I choose ghostwriting services?",
      answer:
        "If you need high-quality content but lack the time or expertise to write it yourself, our ghostwriters will deliver exceptional content on your behalf, while you maintain full ownership and credit.",
    },
    {
      question: "What types of content can I get ghostwritten?",
      answer:
        "We provide ghostwriting services for a wide range of content, including blog posts, books, articles, speeches, essays, business reports, and more.",
    },
    {
      question: "How does ghostwriting work?",
      answer:
        "Simply provide us with your ideas, guidelines, and deadline. Our experienced ghostwriters will produce content tailored to your needs, ensuring it meets your expectations. You'll receive the final draft, ready to be published under your name.",
    },
    {
      question: "Who uses ghostwriting services?",
      answer:
        "Authors, business owners, bloggers, and anyone in need of quality content but lacking the time or writing expertise use our ghostwriting service to get professional work done discreetly.",
    },
    {
      question: "What are the benefits of using ghostwriting services?",
      answer:
        "The key benefits include professional quality writing, content creation on-demand, confidentiality, and the ability to maintain full ownership of the work without the stress of writing it yourself.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Professional Ghostwriting",
    title: "Expert Ghostwriting: Get High-Quality Content, Without the Hassle",
    description:
      "Our ghostwriting service connects you with experienced writers who can produce top-quality content without the need for you to lift a finger.",
    items: [
      "Professional ghostwriters for any type of content.",
      "High-quality writing delivered discreetly and on time.",
    ],
    buttonText: "Get Professional Ghostwriting Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Skilled Ghostwriters",
    title: "Fast, Professional, and Discreet Ghostwriting Services",
    description:
      "Work with talented writers who will craft content based on your ideas and maintain confidentiality. We ensure your work is ready for use without the credit being given to anyone but you.",
    items: [
      "Professional, tailored writing services for any project.",
      "Timely delivery, with full confidentiality.",
    ],
    buttonText: "Get Ghostwriting Help Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Ghostwriting Service (Books)",
      originalPrice: "499.99",
      discountedPrice: "FREE",
    },
    { name: "Blog Post Ghostwriting", originalPrice: "149.99", discountedPrice: "FREE" },
    {
      name: "Article Ghostwriting",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Speech Ghostwriting",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    {
      name: "Business Report Ghostwriting",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Ghostwriting Assistance", originalPrice: "999.99", discountedPrice: "FREE" },
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
        changeInH={"Ghostwriting Service: Get Content, Discreetly"}
        changeInP={"ghostwriters delivering content on time, under your name with complete confidentiality."}
        isboy={false}
      />
      <AcademicNeeds
        title="Ghostwriting Services for Your Content Needs "
        buttons={[
          "Request Ghostwriting Help",
          "Submit Ghostwriting Project",
          "Get  Ghostwriting Assistance",
          "Article Help",
          "Article Ghostwriting Help",
          "Speech Writing Support",
          "Manage Your Ghostwriting Deadlines",
        
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Professional and Discreet",
            description:
              "Our ghostwriting services ensure your content is written by experts, with full confidentiality and discretion.",
            number: "100%",
          },
          {
            title: "Available Anytime",
            description:
              "Our ghostwriters are available 24/7, ready to help you create high-quality content whenever you need it.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery",
            description:
              "We guarantee that all ghostwritten content will be delivered on time, every time, even with tight deadlines.",
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
