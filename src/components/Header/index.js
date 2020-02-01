import React from 'react';
import cx from 'classnames';
import styles from './style.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className={cx(styles.header)}>
      <img src={logo} className={cx(styles.logoImage)} />
    </div>
  );
}
