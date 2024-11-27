import AffordablePricing from "@/components/landing-page/affordablePricing";
import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import FAQS from "@/components/landing-page/faq";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import WritingTool from "@/components/landing-page/writingTool";
import Footer from "@/components/common/footer";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";

const page = () => {
  const faqData = [
    {
      question: "Who will write essay for me?",
      answer: `If you are looking for highly skilled and experienced writers to complete your challenging essays, MyAssignmentHelp is the right place to get started. We have hired each of our expert writers after a rigorous screening and testing process. Our writing desk includes PhD and Master's degree holders, renowned retired professors of reputed universities, research scholars, guest lecturers, and the best industry consultants.
               They are well-versed in the intricacies of different essay formats, do hard work, are proficient at conducting research efficiently, can identify the specific details and unique requirements of your papers, and can help you boost your academic performance significantly. So, if you want to make a long-lasting impression on your professors with your essays, subscribe to our services now.`,
    },
    {
      question: "Is it completely safe to hire essay writers online?",
      answer: `Well, yes. It is safe to get an essay writer service in the US, but only if you know where to buy from. Here’s how to ensure you are only availing papers from a safe and reliable essay writing service online–
               The website should have a team of PhD and Master professional essay writers.
               It should have clear terms and conditions
               It should offer all academic papersright on time
               It should have a transparent privacy policy
               It should offer free edits
               It should provide original essays
               It offers an absolutely free plagiarism report`,
    },
    {
      question:
        "How can I be sure that I am hiring a good essay-writing website?",
      answer: `Choosing a brilliant essay writing service among a herd of many is quite a maze. If you have looming deadlines and are new to availing essays in the US, then MyAssignmenthelp.com is a reliable service you can trust without thinking twice. Here are some of the innumerable reasons that provide MyAssignmentHelp is highly trustworthy –
               High-quality essays
               Quick responses and delivery
               Plagiarism-free content
               24*7 active friendly support team
               Cost-effectivesolutions
               Free revision
               Safe payment gateway
               Money back guarantee`,
    },
    {
      question: "Are there AI tools for writing academic essays for free?",
      answer: `We do have free essay AI technology writing tools to offer essay writer help to students. However, we recommend students ask a professional essay writer to get their essays written to safeguard their academic integrity at any cost. The writers are experienced and highly educated to write any type of essay. These real experts ensure that every paper they deliver is written from scratch and is completely error-free.  We ourselves don’t use AI tools to craft any paper.
               Further, you can also check for ‘write my essay for me’ examples to develop a deeper understanding of the quality and make a decision accordingly.`,
    },
    {
      question: "Is my essay writer AI legit?",
      answer: `You will not have to worry about the legitimacy of the solutions we share. Your assigned essay writer on our team will work hard, take care of every aspect and also share a free originality report along with the final project or task. So, when you say, ‘I need to pay someone to write my paper’ to us, you can be assured about getting a top-notch custom made essay. All our papers have all the necessary elements to fetch a good grade in your academic life.`,
    },
    {
      question: "Does it have a meaning?",
      answer: "No, it's just placeholder text.",
    },
    {
      question: "How do I write a personal essay?",
      answer: `Personal essays seem easy, but finding the right points can be tough as there’s a lot to talk about. While you can share a ‘write my essay for me cheap’ to get prompt assistance and a perfectly written essay, our experts also find it important to help students often learn the best way to write one in the long run. Here’s how you must write your personal essay:
               Make preparations
               Get organized
               Choose a topic
               Find the right tone
               Include a lesson or moral
               Write the essay
               Proofread and edit
               You can call us or drop a mail to get an essay online service. Our top-notch support agents are available 24/7 to help you with different tasks and bring your academic life right on track.`,
    },
    {
      question: "Can I pay someone to write an essay for me?",
      answer: `You can sign up with MyAssignmenthelp.com and hire the right person in your field of study to get your essay written perfectly. We cater to all ‘Write my essay for me online’ or ‘Write a paper’ requests and make sure that the prices for availing our various services are affordable. We will share the prices once you share your requirements with us. You can also get all the details on our ‘Write my essay for me’ app and place an order accordingly. For additional details or more questions, feel free to get in touch with our customer support team. Our team is always at your beck and call 24/7.`,
    },
  ];
  return (
    <>
      <AssignmentHelp
        changeInP={
          "Say ‘Write My Essay for Me’ to Bridge the Gap between Potential and Achievement"
        }
        changeInH={"Professional Write My Essay Service"}
        changeInForm={"Get instant help from 5000+ experts for"}
      />
      <BestAssignmentWiter
        changeInExpertWriteTilte={"Expert Essay Writers at Your Service"}
        changeInExpertWriteP={
          "Take a close look at our in-house desk to climb the ladder of academic success today"
        }
      />
      <HelpYouNeed
        changeInYouNeedTitle={"How It Works?"}
        changeInYouNeedbtn="Order Now"
      />
      <UnmatchedAcademicSuccess
        changeInUnmatedTite={"Benefits of Having Us Write an Essay for You"}
        changeInUnmatedp="Tell us, ‘Write essays for me,’ and unlock these perks along with the perfect solutions"
      />
      <WhatStudentSayAboutUs
        changeTitle={"Reviews from Happy Students"}
        changeInP={
          "Look at what our valuable clients have to say before you request, “Do my essays for me.”"
        }
      />
      <StuckOnAssignment
        changeTitle={"Join our 1M+ of happy users"}
        changeInP={
          "Get original papers written according to your instructions and save time for what matters most."
        }
      />
      <AffordablePricing
        changeTitle={"We Can Write Essays for Any Subject"}
        changeInP={`Can you write my essay for me on any essay topic?”
Well, MyAssignmentHelp has handpicked eminent professional writers who can precisely craft essays on different subjects.`}
      />
      <FAQS questions={faqData} />;
      <WritingTool />
      <UnlockExpertHelp
        changeTitle={"5% Cashback"}
        changeInP={"On APP - grab it while it lasts!"}
      />
      <Footer />
    </>
  );
};

export default page;
