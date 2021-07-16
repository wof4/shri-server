import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './start.module.css';
import logo from '../../../../icons/settingBig.png';

const StartContent = () => (
  <div className={s.start__container}>
    <div className={s.start__content}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.start__desc}>
        Configure repository connection and synchronization settings
      </div>

      <NavLink data-testid="setting" to="/setting">
        <div
          className={s.start__setting_button}
          role="presentation"
        >
          Open settings
        </div>
      </NavLink>

    </div>
  </div>
);

export default StartContent;
