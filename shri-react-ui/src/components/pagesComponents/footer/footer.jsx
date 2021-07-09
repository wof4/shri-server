import React from 'react';
import s from './footer.module.css';

const Footer = () => (
  <div className={s.footer__container}>
    <div className={s.footer}>
      <div className={s.footer__links}>
        <div className={s.footer__link}>Support</div>
        <div className={s.footer__link}>Learning</div>
        <div className={s.footer__link}>Русская версия</div>
      </div>

      <div>2020 Your Name</div>
    </div>
  </div>
);

export default Footer;
