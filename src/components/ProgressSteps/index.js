import React from 'react';
import {Steps, Icon} from 'antd';

const {Step} = Steps;

export default function ProgressSteps({step}) {
  return (
    <Steps>
      <Step
        status={step < 2 ? 'process' : 'finish'}
        title="Connect Strava"
        icon={<Icon type="user" />}
      />
      <Step
        status={step === 2 ? 'process' : step === 1 ? 'wait' : 'finish'}
        title="Data Digestion"
        icon={<Icon type="experiment" />}
      />
      <Step
        status={step === 3 ? 'process' : 'wait'}
        title="Visualize"
        icon={<Icon type="crown" />}
      />
    </Steps>
  );
}
