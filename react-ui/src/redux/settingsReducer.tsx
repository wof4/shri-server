import settingConf from '../api/apiSettings';
import { confDataType, settingType, settingUiType, BaseThunkType, InferActionsTypes } from '../types';


type initialStateType = {
  ui: settingUiType
  confData: confDataType
  setting: settingType
}

export const initialState: initialStateType = {
  ui: {
    isConfigError: false, // наличие ошибки при загрузке настроек
    isSettingConfig: false, // наличие настроек в store
    isSettingLoading: false, /// загрузкa настроек
    isShowLoader: false, // svg loader При загрузке контента
    isChengePage: false,
    isSettingsSend: false, // настройки успешно отправлены
  },
  confData: {
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    period: 0,
  },
  setting: {
    buildCommand: '',
    mainBranch: '',
    period: '',
    repoName: '',
  },
};

const settingsReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'IS_CONFIG_ERROR': {
      return { ...state, ui: { ...state.ui, isConfigError: action.payload } };
    }
    case 'IS_SETTING_CONFIG': {
      return { ...state, ui: { ...state.ui, isSettingConfig: action.payload } };
    }
    case 'SHOW_LOADER': {
      return {
        ...state,
        ui: { ...state.ui, isShowLoader: action.payload },
      };
    }
    case 'SET_CONF_DATA': {
      return { ...state, confData: action.payload };
    }
    case 'SETINGS_LOADDING': {
      return {
        ...state,
        ui: { ...state.ui, isSettingLoading: action.payload },
      };
    }
    case 'SET_CHENGE_PAGE_STATE': {
      return {
        ...state,
        ui: { ...state.ui, isChengePage: action.payload },
      };
    }
    case 'IS_SETTINGS_SEND': {
      return {
        ...state,
        ui: { ...state.ui, isSettingsSend: action.payload },
      };
    }
    case 'ADD_SETTING': {
      return {
        ...state,
        setting: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const actions = {
  isisSettingConfig: (payload: boolean) => ({ type: 'IS_SETTING_CONFIG', payload } as const),
  isConfigError: (payload: boolean) => ({ type: 'IS_CONFIG_ERROR', payload } as const),
  showLoader: (payload: boolean) => ({ type: 'SHOW_LOADER', payload } as const),
  setConfData: (payload: confDataType) => ({ type: 'SET_CONF_DATA', payload } as const),
  settingsLoading: (payload: boolean) => ({ type: 'SETINGS_LOADDING', payload } as const),
  setCengePageState: (payload: boolean) => ({ type: 'SET_CHENGE_PAGE_STATE', payload } as const),
  isSettingsSend: (payload: boolean) => ({ type: 'IS_SETTINGS_SEND', payload } as const),
  addSetting: (payload: settingType) => ({ type: 'ADD_SETTING', payload } as const),

};

export const getSettingTc = (): thunkType => (dispatch) => {
  settingConf.getSettingConf().then((response) => {
    if (response.statusText === 'OK' && response.data.data) {
      // eslint-disable-next-line no-console
      // console.log({ 'пришли настройки': response });  
      dispatch(actions.setConfData(response.data.data));
      dispatch(actions.isisSettingConfig(true));
      dispatch(actions.showLoader(false));
      dispatch(actions.setCengePageState(true));
    } else {
      // eslint-disable-next-line no-console
      // console.log('неудача загрузки настроек');
      dispatch(actions.showLoader(false));
    }
    dispatch(actions.setCengePageState(false));
  });
};

export const setSettingTc = (settings: settingType): thunkType => (dispatch) => {
  //   console.log(settings);
  dispatch(actions.addSetting(settings));
  dispatch(actions.settingsLoading(true));

  return settingConf.setSettingConf(settings).then((response) => {
    if (response === true) {
      // eslint-disable-next-line no-console
      // console.log({ 'настройки успешно отправлены': response });
      dispatch(actions.isConfigError(false));
      dispatch(actions.isSettingsSend(true));
      dispatch(actions.isSettingsSend(false));
      // dispatch(getSettingTc());
    } else {
      // eslint-disable-next-line no-console
      // console.log({ 'настройки не отправлены ошибка': response });
      dispatch(actions.isConfigError(true));
    }
    dispatch(actions.settingsLoading(false));
  });
};

export const setLoadStateTc = (payload: boolean): thunkType => (dispatch) => {
  dispatch(actions.isConfigError(payload));
};

export default settingsReducer;

// type initialStateType = typeof initialState
type actionsType = InferActionsTypes<typeof actions>
type thunkType = BaseThunkType<actionsType>