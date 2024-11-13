import AcademicStress from "@/components/landing-page/academicStress";
import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import BestAssignmentHelper from "@/components/landing-page/bestAssignmentHelper";
import CompletedProjects from "@/components/landing-page/completedProjects";
import LandingPageFeatures from "@/components/landing-page/landingPageFeatures";
import Offers from "@/components/landing-page/offers";
import Prices from "@/components/landing-page/prices";
import Rated from "@/components/landing-page/rated";
import ReviewAndTrust from "@/components/landing-page/reviewAndTrust";
import SecurityPartner from "@/components/landing-page/securityPartner";
import Services from "@/components/landing-page/services";
import TrustedByThousand from "@/components/landing-page/trustedByThousand";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <AssignmentHelp />
      <WhyStudentTrustUs />
      <TrustedByThousand />
      <HelpYouNeed />
      <BestAssignmentWiter />
      <LandingPageFeatures />
      <ReviewAndTrust />
      <Offers />
      <CompletedProjects />
      <BestAssignmentHelper />
      <Services />
      <Prices />
      <SecurityPartner />
      <AcademicStress />
      <Rated />
    </div>
  );
}
