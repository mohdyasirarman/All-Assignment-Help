import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <AssignmentHelp
      
        changeInH="Professional Dissertation Writing Services"
        changeInP="Experience World-Class Ph.D. Dissertation Help Service from Post-Graduate Experts"
      />
      <WhyStudentTrustUs />
      <HelpYouNeed
        changeInYouNeedTitle="How Does Our Dissertation Writing Help Work? "
        changeInYouNeedbtn="Connect With Us"
      />
      <BestAssignmentWiter
        changeInExpertWriteP="AI-Free Dissertations from the Industry Stalwarts"
        changeInExpertWriteTilte="Meet Our Online Dissertation Writing Experts"
      />
      <UnmatchedAcademicSuccess
        changeInUnmatedTite="Benefits Offered by MyAssignmentHelp Dissertation Writing Service"
        changeInUnmatedp="A plethora of perks await you at our online dissertation help services."
      />
      <WhatStudentSayAboutUs
        changeInP="Find out why thousands swear by our professional dissertation writing service."
        changeTitle="Recent Reviews for Our Dissertation Help Service"
      />
      <StuckOnAssignment
        changeInP="Connect with the best dissertation writers from across the USA right here!"
        changeTitle="Ready to Excel in Your Dissertation? Get Help Now!"
      />
      <AffordablePricing
        changeInP={`Get exceptional solutions in any domain from our academic writing experts.
                    We deliver stellar dissertation writing services for:`}
        changeTitle={"Online Dissertation Help at Affordable Prices"}
      />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
