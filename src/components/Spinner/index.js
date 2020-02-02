import React from 'react';
import {Icon} from 'antd';

export default function Spinner(props) {
  return (
    <Icon
      className={`theme-color align-center ${props.className || ''}`}
      type="loading-3-quarters"
      spin
      style={{fontSize: '30px'}}
    />
  );
}
