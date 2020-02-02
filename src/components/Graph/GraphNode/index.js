import React from 'react';
import cx from 'classnames';
import Tooltip from 'antd/es/tooltip';

import styles from './styles.module.css';

const effortToColor = {
  5: '#E34402',
  4: '#E96935',
  3: '#EE8F67',
  2: '#F4B49A',
  1: '#F9DACC',
};

export default function GraphNode({activities, effortLevel, day}) {
  return (
    <Tooltip
      mouseLeaveDelay={0}
      mouseEnterDelay={0.05}
      title={`${
        activities
          ? `${activities.length} activit${
              activities.length === 1 ? 'y' : 'ies'
            } of ${Math.round(
              activities.reduce((acc, val) => (acc += val.distance), 0) / 1000
            )}kms`
          : 'No activities'
      } on ${day}`}
    >
      <div
        className={cx(styles.node)}
        style={{backgroundColor: effortToColor[effortLevel] || '#efefef'}}
      ></div>
    </Tooltip>
  );
}
