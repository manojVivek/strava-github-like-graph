import React from 'react';
import {render} from '@testing-library/react';
import ProgressSteps from './index';

test('renders three steps', () => {
  const {container} = render(<ProgressSteps step={1} />);
  const steps = container.querySelectorAll('.ant-steps-item');
  expect(steps.length).toBe(3);
});

test('Step 1 test', () => {
  const {container} = render(<ProgressSteps step={1} />);
  const activeSteps = container.querySelectorAll('.ant-steps-item-process');
  const finishedSteps = container.querySelectorAll('.ant-steps-item-finish');
  const waitingSteps = container.querySelectorAll('.ant-steps-item-wait');
  expect(activeSteps.length).toBe(1);
  expect(waitingSteps.length).toBe(2);
  expect(finishedSteps.length).toBe(0);
  expect(activeSteps[0].textContent).toBe('Connect Strava');
});

test('Step 2 test', () => {
  const {container} = render(<ProgressSteps step={2} />);
  const activeSteps = container.querySelectorAll('.ant-steps-item-process');
  const finishedSteps = container.querySelectorAll('.ant-steps-item-finish');
  const waitingSteps = container.querySelectorAll('.ant-steps-item-wait');
  expect(activeSteps.length).toBe(1);
  expect(waitingSteps.length).toBe(1);
  expect(finishedSteps.length).toBe(1);
  expect(activeSteps[0].textContent).toBe('Data Digestion');
});

test('Step 3 test', () => {
  const {container} = render(<ProgressSteps step={3} />);
  const activeSteps = container.querySelectorAll('.ant-steps-item-process');
  const finishedSteps = container.querySelectorAll('.ant-steps-item-finish');
  const waitingSteps = container.querySelectorAll('.ant-steps-item-wait');
  expect(activeSteps.length).toBe(1);
  expect(waitingSteps.length).toBe(0);
  expect(finishedSteps.length).toBe(2);
  expect(activeSteps[0].textContent).toBe('Visualize');
});
