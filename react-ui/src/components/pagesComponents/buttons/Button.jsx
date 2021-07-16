import React from 'react';
import s from './button.module.css';
import settingIcon from '../../../icons/Settings.png';
import buildIcon from '../../../icons/build.png';
import rebuild from '../../../icons/rebuild.png';

const Button = (props) => {
  const { icon, text, handleClick } = props;

  const icons = {
    settingIcon,
    buildIcon,
    rebuild,
    icon,
  };

  return (
    <div
      data-testid={icon}
      onClick={() => {
        handleClick(props.icon);
      }}
      className={s.button}
      role="presentation"
    >
      <div className={s.button__icon}>{icon ? <img src={icons[icon]} alt="icon" /> : null}</div>
      {text ? <div className={icon ? s.button__header_text : s.button__text}>{text}</div> : null}
    </div>
  );
};

export default Button;
