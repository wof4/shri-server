import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSettingTc } from '../../../redux/settingsReducer';
import { Config, isLoader } from '../../../selectors';
import Header from '../../pagesComponents/header/header';
import s from '../page.module.css';
import StartContent from './startContent/startContent';
import Loader from '../../pagesComponents/Loader/loader';

const StartPage = () => {
  const settings = useSelector(isLoader);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettingTc());
  }, [dispatch]);
  const config = useSelector(Config);
  if (config === true) {
    return <Redirect to="/build" />;
  }

  const ComandButtonText = 'Settings';
  const ComandButtonIcon = 'settingIcon';

  return (
    <div className={s.page_wrapper}>
      <div className={s.page__content}>
        <Header
          headerText="School CI server"
          ComandButtonText={ComandButtonText}
          ComandButtonIcon={ComandButtonIcon}
        />
        {settings === true ? <Loader /> : <StartContent />}

      </div>
    </div>
  );
};

export default StartPage;
