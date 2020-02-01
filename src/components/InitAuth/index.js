import React, {useEffect} from 'react';
import {Icon} from 'antd';
import {getRequestAccessURL} from '../../commons/stravaClient';

export default function InitAuth() {
  useEffect(() => {
    window.location = getRequestAccessURL();
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
