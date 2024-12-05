import AssignmentHelp from "@/components/landing-page/assignmentHelpHero";
import HelpYouNeed from "@/components/landing-page/helpYouNeed";
import BestAssignmentWiter from "@/components/landing-page/bestAssignmentWriter";
import UnmatchedAcademicSuccess from "@/components/landing-page/unmatchedAcademicSuccess";
import WhatStudentSayAboutUs from "@/components/landing-page/whatStudentSayAboutUs";
import StuckOnAssignment from "@/components/landing-page/stuckOnAssignment";
import AffordablePricing from "@/components/landing-page/affordablePricing";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";



const page = () => {
  return (
    <>
        <AssignmentHelp changeInForm="" changeInH="Ghost Writer Online" changeInP="Hire our Ghostwriters and get solutions from qualified Ph.D Experts." />
        <WhyStudentTrustUs />
        <BestAssignmentWiter changeInExpertWriteP="Hire our professional ghostwriters for top-notch academic papers." changeInExpertWriteTilte="Our Experienced Ghost Essay Writers"/> 
        <HelpYouNeed  changeInYouNeedTitle="How Our Ghostwriter Online Operates" changeInYouNeedbtn="Register Now"/> 
        <UnmatchedAcademicSuccess changeInUnmatedTite="Advantages of Our Ghostwriting Website" changeInUnmatedp="Have a look at why our professional ghostwriting services are so popular." />
        <BestAssignmentWiter changeInExpertWriteP="Discover the Best Professional Writers to Guarantee You an A+." changeInExpertWriteTilte="Hire Affordable Writers for A+ Content"/>
        <WhatStudentSayAboutUs changeInP="33,845 Genuine reviews with a rating of 4.9/5" changeTitle="Top scholars reviews & ratings"/>
        <StuckOnAssignment changeInP="Hire a College Essay Ghost Writer from Our Trusted Brand" changeTitle="Hire a Ghostwriter Online Today"/>
        <AffordablePricing changeInP={"Here’s a Sneak Peek into the Prices of Booking Our Professional Ghostwriters"} changeTitle={"Hire a Ghost Writer Online with Transparent Pricing"} /> 
        <UnlockExpertHelp />  
        <Footer />
    </>
  );
};

export default page;
