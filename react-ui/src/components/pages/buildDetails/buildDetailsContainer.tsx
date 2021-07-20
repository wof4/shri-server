import React from 'react';
import { useSelector } from 'react-redux';
import { getCurentBuildData, getRepoName } from '../../../selectors';
import Header from '../../pagesComponents/header/header';
import s from '../page.module.css';
import DetailsContent from './detailsContent';

const BuildDetailsContainer = () => {
  const contentData = useSelector(getCurentBuildData);
  const repoName = useSelector(getRepoName);
  const ComandButtonText = 'Rebuild';
  const ComandButtonIcon = 'rebuild';
  const settingIcon = 'settingIcon';

  return (
    <div className={s.page_wrapper}>
      <div data-testid="ditaliesPage" className={s.page__content}>
        <Header
          headerText={repoName}
          ComandButtonText={ComandButtonText}
          ComandButtonIcon={ComandButtonIcon}
          settingIcon={settingIcon}
        />
        <DetailsContent contentData={contentData} />
      </div>
    </div>
  );
};

export default BuildDetailsContainer;
