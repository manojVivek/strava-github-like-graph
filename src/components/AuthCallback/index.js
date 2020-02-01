import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { completeAuthentication } from '../../commons/stravaClient';

export default function AuthCallback(props) {
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      console.log('params, location.search', params, window.location.search);
      await completeAuthentication(params.get('code'));
    })();
  }, []);
  
  return 'Please wait';
};