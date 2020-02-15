import React from 'react';
import cx from 'classnames';
import Typography from 'antd/es/typography';

import styles from './styles.module.css';
import GraphNode from '../GraphNode';

const {Text} = Typography;

export default function Legend() {
  return (
    <div className={cx(styles.legend)}>
      <Text className={cx(styles.labelText)}>Less</Text>
      <GraphNode effortLevel={0} disableHoverInfo={true} />
      <GraphNode effortLevel={1} disableHoverInfo={true} />
      <GraphNode effortLevel={2} disableHoverInfo={true} />
      <GraphNode effortLevel={3} disableHoverInfo={true} />
      <GraphNode effortLevel={4} disableHoverInfo={true} />
      <GraphNode effortLevel={5} disableHoverInfo={true} />
      <Text className={cx(styles.labelText)}>More</Text>
    </div>
  );
}
