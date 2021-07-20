import settingConf from "../../api/apiSettings";

const { setSettingTc, getSettingTc, actions } = require("../settingsReducer");

jest.mock('../../api/apiSettings')

const dispatchMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear()
})

const settings = {
    buildCommand: "npm run build",
    mainBranch: "master ",
    period: "10",
    repoName: "wof4/tableData",
}


it('setSettingTc -удачная отправка настроек', async () => {
    const settingConfMock = settingConf as jest.Mocked<typeof settingConf>
    settingConfMock.setSettingConf.mockImplementation(() => Promise.resolve(true));
    const thunk = setSettingTc(settings);

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(6);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.addSetting(settings));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.settingsLoading(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.isConfigError(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.isSettingsSend(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(5, actions.isSettingsSend(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(6, actions.settingsLoading(false));
})

it('setSettingTc -неудачная отправка настроек', async () => {
    const settingConfMock = settingConf as jest.Mocked<typeof settingConf>
    settingConfMock.setSettingConf.mockImplementation(() => Promise.resolve(false));
    const thunk = setSettingTc(settings);

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(4);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.addSetting(settings));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.settingsLoading(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.isConfigError(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.settingsLoading(false));
})




const response = {
    statusText: 'OK',
    data: {
        data: {
            buildCommand: "build",
            id: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
            mainBranch: "master",
            period: 0,
            repoName: "wof4/tableData",
        }
    }
}

it('getSettingTc - удачный запрос настроек', async () => {

    const settingConfMock = settingConf as jest.Mocked<typeof settingConf>
    settingConfMock.getSettingConf.mockImplementation(() => Promise.resolve(response));
    const thunk = getSettingTc();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(5);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setConfData(response.data.data));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.isisSettingConfig(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.showLoader(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.setCengePageState(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(5, actions.setCengePageState(false));
})

it('getSettingTc -неудачный запрос настроек', async () => {
    const settingConfMock = settingConf as jest.Mocked<typeof settingConf>
    settingConfMock.getSettingConf.mockImplementation(() => Promise.resolve(response.statusText = 'НЕ OK'));
    const thunk = getSettingTc();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.showLoader(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setCengePageState(false));
})
