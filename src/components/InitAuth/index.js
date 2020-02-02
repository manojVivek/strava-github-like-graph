import React, {useEffect} from 'react';
import {getRequestAccessURL} from '../../commons/strava-utils';
import Spinner from '../Spinner';

export default function InitAuth() {
  useEffect(() => {
    window.location = getRequestAccessURL();
  }, []);
  return <Spinner />;
}
