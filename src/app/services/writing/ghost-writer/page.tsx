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
      <Experts/>
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
