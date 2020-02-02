import React, {useEffect} from 'react';
import cx from 'classnames';
import Spinner from '../Spinner';
import {Typography} from 'antd';

import styles from './styles.module.css';
import {processActivitiesData} from '../../commons/strava-utils';

const {Title} = Typography;

export default function DataDigestion({done}) {
  useEffect(() => {
    (async () => {
      await processActivitiesData();
      done();
    })();
  }, [done]);
  return (
    <div className={cx(styles.dataDigestion)}>
      <Title level={3} className="theme-color">
        Negotiating your data with Strava..
      </Title>

      <Spinner className="top-space-medium" />
    </div>
  );
}
