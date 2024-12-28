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
    {
      name: "Blog Post Ghostwriting",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
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
    {
      name: "Unlimited Ghostwriting Assistance",
      originalPrice: "999.99",
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
        changeInH={"Ghostwriting Service: Get Content, Discreetly"}
        changeInP={
          "ghostwriters delivering content on time, under your name with complete confidentiality."
        }
        isboy={false}
      />
      <AcademicNeeds
        title="Ghostwriting Services for Content Needs "
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
      <Features />
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
