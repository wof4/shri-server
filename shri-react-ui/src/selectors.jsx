// BUILDS //

// добавлен ли билд в очередь
export const addNewBuild = (state) => state.buildHistoryReducer.ui.isAddNewBuild;
// массив билдов
export const getHistoryContentData = (state) => state.buildHistoryReducer.buildListData;
// показывать ли форму для нового билда
export const getBuildFormFlag = (state) => state.buildHistoryReducer.ui.isShowBuildForm;
// есть ли Loader на странице билдов
export const isLoader = (state) => state.buildHistoryReducer.ui.isShowLoader;

// SETTINGS //

// есть ли Loader на странице настроек
export const getSettingLoader = (state) => state.settingsReducer.ui.isSettingLoading;
// обьект настроек
export const Config = (state) => state.settingsReducer.ui.isSettingConfig;
// имя репозитория
export const getRepoName = (state) => state.settingsReducer.confData.repoName;
// команда из настроек
export const getBuildCommand = (state) => state.settingsReducer.confData.buildCommand;
// ошибка отправки настроек
export const getErrorState = (state) => state.settingsReducer.ui.isConfigError;
// смена страницы при удачной подгрузке настроек
export const getСhengePage = (state) => state.settingsReducer.ui.isChengePage;
// отправленны ли настройки
export const settingsSend = (state) => state.settingsReducer.ui.isSettingsSend;

// DETAILS //

// текущий билд
export const getCurentBuildData = (state) => state.buildDatailsReducer.buildDetailsData;
