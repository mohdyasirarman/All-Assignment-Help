import React from 'react';
import HeroSectionNew from './HeroSectionNew';


interface AssignmentHelpProps {
  changeInH: string;
  changeInP: string;
}

export default function AssignmentHelp({ changeInH, changeInP }: AssignmentHelpProps) {
  return (
    <div>
      <HeroSectionNew changeInH={changeInH} changeInP={changeInP} isboy={true} />
    </div>
  );
}
