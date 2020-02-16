import React from 'react';
import cx from 'classnames';
import styles from './style.module.css';
import logo from '../../assets/logo.png';
import {Icon, Tooltip} from 'antd';

export default function Header() {
  return (
    <div className={cx(styles.header)}>
      <img
        src={logo}
        className={cx(styles.logoImage)}
        alt="Strava-Github-Like-Graph"
      />
      <div className={cx(styles.aboutSection)}>
        <Tooltip
          title="Lets improve it together! 😎"
          className={cx(styles.iconContainer)}
        >
          <a
            href="https://github.com/manojVivek/strava-github-like-graph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" className={cx(styles.icon)} />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
