import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Icon} from 'antd';
import {completeAuthentication} from '../../commons/stravaClient';

export default function AuthCallback(props) {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      console.log('params, location.search', params, window.location.search);
      await completeAuthentication(params.get('code'));
      history.push('/');
    })();
  }, []);

  return (
    <Icon
      className="theme-color align-center"
      type="loading-3-quarters"
      spin
      style={{fontSize: '30px'}}
    />
  );
}
