import React from 'react';
import cx from 'classnames';
import GraphNode from './GraphNode';
import {Typography} from 'antd';
import MonthNode from './MonthNode';

import styles from './styles.module.css';

const {Text} = Typography;

export default function Graph({data}) {
  console.log('data', data);
  const days = Object.keys(data).reverse();
  const monthRunner = new Date(days[0]);
  const months = Array.from(Array(12)).map(() => {
    const month = monthRunner.toLocaleString('default', {month: 'short'});
    monthRunner.setMonth(monthRunner.getMonth() + 1);
    return month;
  });
  const activitiesCount = React.useMemo(
    () =>
      Object.keys(data).reduce(
        (acc, val) => (acc += (data[val].activities || []).length),
        0
      ),
    [data]
  );
  return (
    <>
      <Text>{activitiesCount} activities in the last year</Text>
      <div className={cx(styles.graphContainer)}>
        <div className={cx(styles.monthRunner)}>
          {months.map(month => (
            <MonthNode month={month} />
          ))}
        </div>
        <div className={cx(styles.graph)}>
          {days.map(day => (
            <GraphNode {...data[day]} key={day} day={day} />
          ))}
        </div>
      </div>
    </>
  );
}
