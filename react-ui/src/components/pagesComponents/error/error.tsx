import React from 'react';
import { ErrorWindowPropsType } from '../../../types';
import s from './error.module.css';



const ErrorWindow: React.FC<ErrorWindowPropsType> = (props) => {
  const { errorText, cancelError } = props;
  return (
    <div className={s.error__container}>
      <div className={s.error__contant}>
        <div>{errorText}</div>
        <div
          onClick={() => { cancelError(); }}
          className={s.error__button}
          role="presentation"
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ErrorWindow;
