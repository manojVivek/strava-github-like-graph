import React, {useState} from 'react';
import {getAthlete} from '../../commons/strava-utils';
import ProgressSteps from '../ProgressSteps';
import WelcomeMessage from '../WelcomeMessage';
import DataDigestion from '../DataDigestion';

export default function ActivityGraph(props) {
  const athlete = getAthlete();
  const [step, setStep] = useState(athlete === null ? 1 : 2);
  return (
    <>
      <ProgressSteps step={step} />
      {step === 1 && <WelcomeMessage />}
      {step === 2 && <DataDigestion done={() => setStep(3)} />}
      {step === 3 && <WelcomeMessage />}
    </>
  );
}
