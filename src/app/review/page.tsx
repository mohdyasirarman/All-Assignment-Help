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
    return (
    <>
          <HeroSectionNew changeInH={"Real Reviews from Student Who Trust"} changeInP={""} isboy={true} isReviewPage={true}/>
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