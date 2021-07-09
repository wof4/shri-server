import buildHistoryReducer from "../settingsReducer";
let state;
beforeEach(() => {
    state = {
        ui: {
            isConfigError: false, // наличие ошибки при загрузке настроек
            isSettingConfig: false, // наличие настроек в store
            isSettingLoading: false, /// загрузкa настроек
            isShowLoader: false, // svg loader При загрузке контента
            isChengePage: false, // смена страницы
            isSettingsSend: false,//настройки успешно отправлены
        },
        confData: {
            repoName: '',
            buildCommand: '',
            mainBranch: '',
            period: 0,
        },
    }
})



it('IS_CONFIG_ERROR', () => {
    const action = { type: 'IS_CONFIG_ERROR', payload: false }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isConfigError: action.payload,
        }
    })
})

it('IS_SETTING_CONFIG', () => {
    const action = { type: 'IS_SETTING_CONFIG', payload: false }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isSettingConfig: action.payload,
        }
    })
})

it('SHOW_LOADER', () => {
    const action = { type: 'SHOW_LOADER', payload: true }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isShowLoader: action.payload,
        }
    })
})


const conf = {
    buildCommand: "build",
    id: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
    mainBranch: "master",
    period: 0,
    repoName: "wof4/tableData",
}

it('SET_CONF_DATA', () => {
    const action = { type: 'SET_CONF_DATA', payload: conf }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        confData: action.payload,
    })
})

it('SETINGS_LOADDING', () => {
    const action = { type: 'SETINGS_LOADDING', payload: true }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isSettingLoading: action.payload,
        }
    })
})

it('SET_CHENGE_PAGE_STATE', () => {
    const action = { type: 'SET_CHENGE_PAGE_STATE', payload: true }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isChengePage: action.payload,
        }
    })
})

it('IS_SETTINGS_SEND', () => {
    const action = { type: 'IS_SETTINGS_SEND', payload: true }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isSettingsSend: action.payload,
        }
    })
})