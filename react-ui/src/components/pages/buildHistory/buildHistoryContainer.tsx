import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  getBuildFormFlag,
  getHistoryContentData,
  getRepoName,
  Config,
  addNewBuild,
} from '../../../selectors';
import Header from '../../pagesComponents/header/header';
import HistoryContent from './historyContent';
import NewBuildPopUp from './newBuildPopUp/newBuildPopUp';
import s from '../page.module.css';
import { getBuildsTc } from '../../../redux/buildHistoryReducer';

const BuildHistoryPage = () => {
  const contentData = useSelector(getHistoryContentData);
  const repoName = useSelector(getRepoName);
  const showBuildForm = useSelector(getBuildFormFlag);
  const storeConfig = useSelector(Config);
  const isNewBuildAdd = useSelector(addNewBuild);
  const ComandButtonText = 'Run build';
  const ComandButtonIcon = 'buildIcon';
  const settingIcon = 'settingIcon';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuildsTc(storeConfig));
  }, [dispatch, storeConfig]);

  if (!storeConfig) {
    return <Redirect to="/start" />;
  }
  if (isNewBuildAdd === true) {
    dispatch(getBuildsTc(storeConfig));
    return <Redirect to="/details" />;
  }

  return (
    <div data-testid="build__history_container" className={s.build__history_container}>
      {showBuildForm ? <NewBuildPopUp /> : null}
      <div className={s.page_wrapper}>
        <div>
          <Header
            headerText={repoName}
            ComandButtonText={ComandButtonText}
            ComandButtonIcon={ComandButtonIcon}
            settingIcon={settingIcon}
          />
          <HistoryContent contentData={contentData} />
        </div>
      </div>
    </div>
  );
};

export default BuildHistoryPage;
