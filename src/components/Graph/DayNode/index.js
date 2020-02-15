import React from 'react';
import cx from 'classnames';
import Typography from 'antd/es/typography';

import styles from './styles.module.css';

const {Text} = Typography;

export default function DayNode({day}) {
  return (
    <div className={cx(styles.day)}>
      <Text className={cx(styles.dayText)}>{day}</Text>
    </div>
  );
}
