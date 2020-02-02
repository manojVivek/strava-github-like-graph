import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {completeAuthentication} from '../../commons/strava-utils';
import Spinner from '../Spinner';

export default function AuthCallback(props) {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      await completeAuthentication(params.get('code'));
      history.push(process.env.PUBLIC_URL);
    })();
  }, [history]);

  return <Spinner />;
}
