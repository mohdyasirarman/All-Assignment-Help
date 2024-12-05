import React from 'react';
import HeroSection from './heroSection';


interface AssignmentHelpProps {
  changeInForm: string;
  changeInH: string;
  changeInP: string;
}

export default function AssignmentHelp({ changeInForm, changeInH, changeInP }: AssignmentHelpProps) {
  return (
    <div>
      <HeroSection changeInForm={changeInForm} changeInH={changeInH} changeInP={changeInP} />
    </div>
  );
}
