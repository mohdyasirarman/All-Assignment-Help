import AcademicStress from "@/app/component/landing-page/academicStress";
import AssignmentHelp from "@/app/component/landing-page/assignmentHelpHero";
import BestAssignmentHelper from "@/app/component/landing-page/bestAssignmentHelper";
import CompletedProjects from "@/app/component/landing-page/completedProjects";
import LandingPageFeatures from "@/app/component/landing-page/landingPageFeatures";
import Offers from "@/app/component/landing-page/offers";
import Prices from "@/app/component/landing-page/prices";
import Rated from "@/app/component/landing-page/rated";
import ReviewAndTrust from "@/app/component/landing-page/reviewAndTrust";
import SecurityPartner from "@/app/component/landing-page/securityPartner";
import Services from "@/app/component/landing-page/services";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <AssignmentHelp />
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
