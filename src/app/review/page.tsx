import HeroSectionNew from "@/components/landing-page/HeroSectionNew"
import SlidingReviews from "@/components/landing-page/slidingreviews";
import FeedbackFilter from "@/components/landing-page/feedbackfilter";
import FeedbackGrid from "@/components/landing-page/feedbackgrid";
import ShareExperience from "@/components/landing-page/shareexperience";
import FeedbackGrid2 from "@/components/landing-page/feedbackgrid2";
import FAQS1 from "@/components/landing-page/faqs1";
import UnlockExpertHelp1 from "@/components/landing-page/unlockexperthelp1";
import Footer from "@/components/common/footer";

export default function ReviewPage() {
    const testimonials = [
        {
          id: 1,
          name: "Michael Chang",
          category: "Full-Stack Development",
          feedback: "The team delivered an outstanding full-stack solution. Our application's performance improved by 60% and user engagement has doubled since the update.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 2,
          name: "Sophia Anderson",
          category: "AI Implementation",
          feedback: "The machine learning model they developed has reduced our data processing time by 75%. Exceptional work in making complex AI solutions accessible and practical.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 3,
          name: "Ahmed Hassan",
          category: "Mobile Development",
          feedback: "Our mobile app now ranks in the top 10 in its category. The UX improvements led to a 40% increase in user retention. Couldn't be happier with the results!",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 4,
          name: "Isabella Martinez",
          category: "E-commerce Solutions",
          feedback: "The new e-commerce platform is a game-changer. Cart abandonment dropped by 35% and mobile sales increased by 50%. Professional service from start to finish.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 5,
          name: "Robert Wilson",
          category: "Cloud Architecture",
          feedback: "Exceptional cloud architecture work. Our infrastructure costs decreased by 40% while improving scalability. Their AWS expertise is truly remarkable.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 6,
          name: "Elena Popov",
          category: "UI/UX Design",
          feedback: "The redesign transformed our product. User satisfaction scores increased from 72% to 94%. Their attention to detail and user-centric approach made all the difference.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 7,
          name: "Daniel Lee",
          category: "DevOps",
          feedback: "Streamlined our deployment process reducing release time from days to hours. The automated pipeline they built has transformed our development workflow.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 8,
          name: "Sarah O'Connor",
          category: "Cybersecurity",
          feedback: "Their security audit and implementation of enhanced protocols has made our system fortress-like. We've seen a 90% reduction in vulnerability incidents.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 9,
          name: "Raj Patel",
          category: "Blockchain Development",
          feedback: "The smart contract implementation was flawless. Transaction processing improved by 200% while maintaining robust security. Exceptional blockchain expertise.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 10,
          name: "Emma Thompson",
          category: "Data Analytics",
          feedback: "The dashboard they created gives us insights we never had before. Decision-making is now 3x faster with real-time analytics. Outstanding work!",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 11,
          name: "Luis Garcia",
          category: "API Development",
          feedback: "The RESTful API they designed handles 10x our previous load with better response times. Documentation is crystal clear and integration was seamless.",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        },
        {
          id: 12,
          name: "Nina Chen",
          category: "System Architecture",
          feedback: "Complete transformation of our legacy systems. The new architecture reduced downtime by 99% and cut maintenance costs in half. Brilliant work!",
          image: "/static/images/grid.svg",
          rating: "/static/images/stars1.svg",
        }
      ];
      
     

    return (
    <>
          <HeroSectionNew changeInH={"Real Reviews from Student Who Trust"} changeInP={""} isboy={true} isReviewPage={true}/>
          <FeedbackFilter />
          <FeedbackGrid testimonials={testimonials} />
          <ShareExperience />
          <FeedbackGrid2 />
          <SlidingReviews />
          <FAQS1 />
          <UnlockExpertHelp1 />  
          <Footer />
    </>
    )
}