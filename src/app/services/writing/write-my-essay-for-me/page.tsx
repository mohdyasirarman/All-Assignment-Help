import AffordablePricing from "@/components/landing-page/affordablePricing";
import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import Footer from "@/components/common/footer";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";

const page = () => {
  

  return (
    <>
      <AssignmentHelp
        changeInP={
          "Say ‘Write My Essay for Me’ to Bridge the Gap between Potential and Achievement"
        }
        changeInH={"Professional Write My Essay Service"}
        changeInForm={"Get instant help from 5000+ experts for"}
      />
        <WhyStudentTrustUs />
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
      <BestAssignmentWiter changeInExpertWriteP="Discover the Best Professional Writers to Guarantee You an A+." changeInExpertWriteTilte="Hire Affordable Writers for A+ Content"/>
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
      <UnlockExpertHelp
      />
      <Footer />
    </>
  );
};

export default page;
