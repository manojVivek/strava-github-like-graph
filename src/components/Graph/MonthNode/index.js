import React from 'react';
import cx from 'classnames';
import Typography from 'antd/es/typography';

import styles from './styles.module.css';

const {Text} = Typography;

export default function MonthNode({month}) {
  return (
    <div className={cx(styles.monthNode)}>
      <Text className={cx(styles.monthText)}>{month}</Text>
    </div>
  );
}
