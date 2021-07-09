import React from 'react';
import preloader from './loader_icon/preloader.svg';
import s from './loader.module.css';

const Loader = () => (
  <div className={s.loader__container}>
    <img src={preloader} alt="Loading..." />
  </div>
);
export default Loader;
