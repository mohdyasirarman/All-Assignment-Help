import HeroSectionNew from "@/components/landing-page/HeroSectionNew"
import SlidingReviews from "@/components/review-page/slidingreviews";
import FeedbackFilter from "@/components/review-page/feedbackfilter";
import FeedbackGrid from "@/components/review-page/feedbackgrid";
import ShareExperience from "@/components/review-page/shareexperience";
import FeedbackGrid2 from "@/components/review-page/feedbackgrid2";
import FAQS1 from "@/components/review-page/faqs1";
import UnlockExpertHelp1 from "@/components/review-page/unlockexperthelp1";
import Footer from "@/components/common/footer";

export default function ReviewPage() {
    return (
    <>
         <HeroSectionNew changeInH={""} changeInP={""} isboy={true}/>
         <FeedbackFilter />
          <FeedbackGrid />
          <ShareExperience />
          <FeedbackGrid2 />
          <SlidingReviews />
          <FAQS1 />
          <UnlockExpertHelp1 />  
          <Footer />
    </>
    )
}