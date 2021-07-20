import React from 'react';
import s from './button.module.css';
import settingIcon from '../../../icons/Settings.png';
import buildIcon from '../../../icons/build.png';
import rebuild from '../../../icons/rebuild.png';
import { buttonPropsType } from '../../../types';


const Button = (props:buttonPropsType) => {
  const { icon, text, handleClick } = props;

  const icons = {
    settingIcon,
    buildIcon,
    rebuild,
    icon,
  };

  type iconsType = typeof icons

  return (
    <div
      data-testid={icon}
      onClick={() => {
        if(props.icon){
          handleClick(props.icon);
        }
        
      }}
      className={s.button}
      role="presentation"
    >
      <div className={s.button__icon}>{icon ? <img src={icons[icon as keyof iconsType]} alt="icon" /> : null}</div>
      {text ? <div className={icon ? s.button__header_text : s.button__text}>{text}</div> : null}
    </div>
  );
};

export default Button;
