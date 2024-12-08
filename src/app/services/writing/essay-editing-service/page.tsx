import AffordablePricing from '@/components/landing-page/affordablePricing';
import AssignmentHelp from '@/components/landing-page/assignmentHelpHero';
import BestAssignmentWiter from '@/components/landing-page/bestAssignmentWriter';
import HelpYouNeed from '@/components/landing-page/helpYouNeed';
import StuckOnAssignment from '@/components/landing-page/stuckOnAssignment';
import WhatStudentSayAboutUs from '@/components/landing-page/whatStudentSayAboutUs';
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import React from 'react';
import Footer from '@/components/common/footer';
import UnmatchedAcademicSuccess from '@/components/landing-page/unmatchedAcademicSuccess';
import WhyStudentTrustUs from '@/components/landing-page/whyStudentTrustUs';


const page = () => {


  return (
    <>
       <AssignmentHelp  changeInH="Essay Editing & Proofreading Service" changeInP="Get Top-Notch Paper Editors at Unbeatable Prices at MyAssignmenthelp!" />
       <WhyStudentTrustUs />
       <BestAssignmentWiter changeInExpertWriteP="Know the Top Minds in the Industry and Hire Them" changeInExpertWriteTilte="Top Essay Editors to Polish Your Papers"/>
       <HelpYouNeed  changeInYouNeedTitle="Expert Paper Editing Service in 3 Easy Steps" changeInYouNeedbtn="Order Now "/>
       <UnmatchedAcademicSuccess changeInUnmatedTite="What Makes Our Cheap Essay Writing Services Stand Out?" changeInUnmatedp="Discover Why We are the Best Essay Writing Service" />
       <BestAssignmentWiter changeInExpertWriteP="" changeInExpertWriteTilte="What Makes Our Cheap Essay Writing Services Stand Out?"/> 
       <WhatStudentSayAboutUs changeInP="Unlock the Full Benefits of Our Essay Edit Assistance" changeTitle="Benefits of Our Essay Proofreading Services"/>
       <StuckOnAssignment changeInP="Getting flawless essays is now a breeze." changeTitle="The Best Online Essay Editing Services at Your Service"/>
       <AffordablePricing changeInP="Take a Quick Glance at Our Competitive Pricing" changeTitle="Hire Essay Editor at the Most Affordable Prices" /> 
       <UnlockExpertHelp />  
       <Footer/> 
    </>
  );
};

export default page;
