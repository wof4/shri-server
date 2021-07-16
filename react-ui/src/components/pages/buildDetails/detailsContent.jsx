import AnsiUp from 'ansi_up';
import React from 'react';
import Card from '../../pagesComponents/card/Card';

import s from './details.module.css';
// import { htmlText } from './text';

const DetailsContent = (props) => {
  const { contentData } = props;
  let html;
  if (contentData.logs) {
    const ansiUp = new AnsiUp();
    html = ansiUp.ansi_to_html(contentData.logs);
  }

  return (
    <div className={s.details}>
      <div>
        <Card {...contentData} shouldDirectionColumn />
      </div>
      <div className={s.details__logs}>
        <div className={s.details__log_content} />
        {html || 'Loading...'}
      </div>
    </div>
  );
};

export default DetailsContent;
