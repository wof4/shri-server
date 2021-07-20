import AnsiUp from 'ansi_up';
import React from 'react';
import { detailsContentDataType } from '../../../types';
import Card from '../../pagesComponents/card/Card';

import s from './details.module.css';

type DetailsContentPropsType = {
  contentData: detailsContentDataType
}

const DetailsContent: React.FC<DetailsContentPropsType> = (props) => {
  const { contentData } = props;
  const shouldDirectionColumn = "shouldDirectionColumn"
  let html;
  if (contentData.logs) {
    const ansiUp = new AnsiUp();
    html = ansiUp.ansi_to_html(contentData.logs);
  }

  return (
    <div className={s.details}>
      <div>
        <Card {...contentData} shouldDirectionColumn={
          shouldDirectionColumn
        } />
      </div>
      <div className={s.details__logs}>
        <div className={s.details__log_content} />
        {html || 'Loading...'}
      </div>
    </div>
  );
};

export default DetailsContent;
