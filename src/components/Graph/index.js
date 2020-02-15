import React from 'react';
import cx from 'classnames';
import GraphNode from './GraphNode';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
import MonthNode from './MonthNode';

import styles from './styles.module.css';
import {getAthlete} from '../../commons/strava-utils';
import DayNode from './DayNode';

const {Text} = Typography;

export default function Graph({data}) {
  const athlete = getAthlete();
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
      <div className={cx(styles.container, 'top-space-medium')}>
        <div className={cx(styles.userInfoContainer)}>
          <Avatar src={athlete.profile} className={cx(styles.userAvatar)} />
          <div className={cx(styles.userBasicInfo)}>
            <Text strong>{`${athlete.firstname} ${athlete.lastname}`}</Text>
            <Text
              className={cx(styles.userCity)}
            >{`${athlete.city}, ${athlete.country}`}</Text>
          </div>
        </div>
        <div>
          <Text>{activitiesCount} activities in the last year</Text>
        </div>
        <div className={cx(styles.graphContainer)}>
          <div className={cx(styles.dayRunner)}>
            {['Mon', 'Wed', 'Fri'].map(day => (
              <DayNode day={day} key={day} />
            ))}
          </div>
          <div>
            <div className={cx(styles.monthRunner)}>
              {months.map(month => (
                <MonthNode month={month} key={month} />
              ))}
            </div>
            <div className={cx(styles.graph)}>
              {days.map(day => (
                <GraphNode {...data[day]} key={day} day={day} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
