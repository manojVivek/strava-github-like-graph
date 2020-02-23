import React, {useState} from 'react';
import cx from 'classnames';
import GraphNode from './GraphNode';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
import MonthNode from './MonthNode';
import {Statistic, Row, Col} from 'antd';

import styles from './styles.module.css';
import {getAthlete} from '../../commons/strava-utils';
import DayNode from './DayNode';
import Legend from './Legend';
import Activity from './Activity';

const {Text, Title} = Typography;

export default function Graph({data}) {
  const athlete = getAthlete();
  const days = Object.keys(data).reverse();
  const [selectedDay, setSelectedDay] = useState(
    Object.keys(data).find(day => data[day].effortLevel)
  );
  console.log('selectedDay', selectedDay);
  const monthRunner = new Date(days[0]);
  const now = new Date();
  const months = Array.from(Array(12)).map(() => {
    const month = monthRunner.toLocaleString('default', {month: 'short'});
    monthRunner.setMonth(monthRunner.getMonth() + 1);
    return month;
  });
  if (now.getDate() > 14) {
    months.push(months[0]);
  }
  if (now.getDate() > 21) {
    months.shift();
  }
  const activitiesCount = React.useMemo(
    () =>
      Object.keys(data).reduce(
        (acc, val) => (acc += (data[val].activities || []).length),
        0
      ),
    [data]
  );
  return (
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
        <div className={cx(styles.graphSection)}>
          <div className={cx(styles.dayRunner)}>
            {['Mon', 'Wed', 'Fri'].map(day => (
              <DayNode day={day} key={day} />
            ))}
          </div>
          <div>
            <div
              className={cx(styles.monthRunner)}
              style={{padding: months.length > 12 ? 0 : '0 16px'}}
            >
              {months.map((month, index) => (
                <MonthNode month={month} key={month + index} />
              ))}
            </div>
            <div className={cx(styles.graph)}>
              {days.map(day => (
                <GraphNode
                  {...data[day]}
                  key={day}
                  day={day}
                  setSelectedDay={setSelectedDay}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={cx(styles.row)}>
          <Legend />
        </div>
      </div>
      <div className={cx(styles.activitiesSummaryContainer)}>
        <Title level={3}>Activities on {selectedDay}</Title>
        {(data[selectedDay].activities || []).map(activity => (
          <Activity {...activity} />
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(data[selectedDay], null, 2)}</pre>
      </div>
    </div>
  );
}
