// BUILDS //

import { appStateType } from "./types";



// добавлен ли билд в очередь
export const addNewBuild = (state:appStateType) => state.buildHistoryReducer.ui.isAddNewBuild;
// массив билдов
export const getHistoryContentData = (state:appStateType) => state.buildHistoryReducer.buildListData;
// показывать ли форму для нового билда
export const getBuildFormFlag = (state:appStateType) => state.buildHistoryReducer.ui.isShowBuildForm;
// есть ли Loader на странице билдов
export const isLoader = (state:appStateType) => state.buildHistoryReducer.ui.isShowLoader;

// SETTINGS //

// есть ли Loader на странице настроек
export const getSettingLoader = (state:appStateType) => state.settingsReducer.ui.isSettingLoading;
// обьект настроек
export const Config = (state:appStateType) => state.settingsReducer.ui.isSettingConfig;
// имя репозитория
export const getRepoName = (state:appStateType) => state.settingsReducer.confData.repoName;
// команда из настроек
export const getBuildCommand = (state:appStateType) => state.settingsReducer.confData.buildCommand;
// ошибка отправки настроек
export const getErrorState = (state:appStateType) => state.settingsReducer.ui.isConfigError;
// смена страницы при удачной подгрузке настроек
export const getСhengePage = (state:appStateType) => state.settingsReducer.ui.isChengePage;
// отправленны ли настройки
export const settingsSend = (state:appStateType) => state.settingsReducer.ui.isSettingsSend;

export const getComnfData = (state:appStateType) => state.settingsReducer.confData;

// DETAILS //

// текущий билд
export const getCurentBuildData = (state:appStateType) => state.buildDatailsReducer.buildDetailsData;
