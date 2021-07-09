import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setLoadStateTc } from '../../../redux/settingsReducer';
import {
  Config,
  getSettingLoader,
  getErrorState,
  getСhengePage,
  settingsSend,
} from '../../../selectors';
import Header from '../../pagesComponents/header/header';
import s from '../page.module.css';
import GetForm from './form/getForm';
import Loader from '../../pagesComponents/Loader/loader';
import ErrorWindow from '../../pagesComponents/error/error';

const SettingPage = () => {
  const dispach = useDispatch();
  const loader = useSelector(getSettingLoader);
  const isconfigData = useSelector(Config);
  const errorState = useSelector(getErrorState);
  const chengePage = useSelector(getСhengePage);
  const isSettingsSend = useSelector(settingsSend);
  const cancelError = () => {
    dispach(setLoadStateTc(false));
  };
  console.log(isSettingsSend, chengePage, isconfigData);
  if ((isconfigData === true && chengePage === true) || isSettingsSend === true) {
    return <Redirect to="/build" />;
  }
  return (
    <div data-testid="SettingsWrapper" className={loader === true ? s.page_wrapper_disabled : s.page_wrapper}>
      {errorState === true ? (
        <ErrorWindow
          cancelError={cancelError}
          errorText="Указанный вами репозиторий не найден"
        />
      ) : null}
      <div>
        <Header headerText="School CI server" />
        <div>
          {loader ? <Loader /> : null}
          <GetForm loader={loader} />
        </div>
      </div>
    </div>
  );
};
export default SettingPage;
