import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { getRequestAccessURL } from '../../commons/stravaClient';

export default function InitAuth() {
  useEffect(() => {
    window.location = getRequestAccessURL();
  }, []);
  return 'Please wait';
};