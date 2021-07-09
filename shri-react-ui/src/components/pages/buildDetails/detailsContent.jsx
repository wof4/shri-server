import React from 'react';
import Card from '../../pagesComponents/card/Card';

import s from './details.module.css';
import { htmlText } from './text';

const DetailsContent = (props) => {
  const { contentData } = props;

  return (
    <div className={s.details}>
      <div>
        <Card {...contentData} shouldDirectionColumn />
      </div>
      <div className={s.details__logs}>
        <div className={s.details__log_content} />
        {htmlText}
      </div>
    </div>
  );
};

export default DetailsContent;
