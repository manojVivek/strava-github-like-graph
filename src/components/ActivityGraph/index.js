import React from 'react';
import {getAthlete} from '../../commons/stravaClient';
import ProgressSteps from '../ProgressSteps';
import WelcomeMessage from '../WelcomeMessage';

export default function ActivityGraph(props) {
  const athlete = getAthlete();
  const step = athlete === null ? 1 : 2;
  return (
    <>
      <ProgressSteps step={step} />
      {step === 1 ? <WelcomeMessage /> : null}
    </>
  );
}
