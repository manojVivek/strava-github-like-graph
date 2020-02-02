import React from 'react';
import {useHistory} from 'react-router-dom';
import cx from 'classnames';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';

import styles from './styles.module.css';

const {Title, Text} = Typography;

export default function WelcomeMessage() {
  const history = useHistory();
  return (
    <div className={cx(styles.welcomeMessage)}>
      <Title level={3} className="theme-color">
        Authorize
      </Title>
      <Text strong className="height-200">
        App needs access to your Strava activies to show the graph, continue and
        authorize with your strava account to proceed.
      </Text>
      <Button
        type="primary"
        icon="lock"
        className="top-space-medium"
        onClick={() => history.push('init-auth')}
      >
        Allow Strava Access
      </Button>
    </div>
  );
}
