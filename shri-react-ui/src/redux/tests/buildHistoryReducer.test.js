const { default: buildsApi } = require("../../api/apiBuilds");
const { ditailsActions } = require("../buildDatailsReducer");
const { getBuildsTc, setNewBuildTc, actions } = require("../buildHistoryReducer");

jest.mock('../../api/apiBuilds')

const dispatchMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear()
})


const response = {
    statusText: 'OK',
    data: {
        data: [
            {
                id: "5b1c472d-4c99-4caa-b721-39b2d0050c67",
                configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
                buildNumber: 82,
                commitMessage: "first",
                commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
                branchName: "* master\n",
                authorName: "a.adamov",
                status: "Waiting"
            },
            {
                id: "1936fa32-bd4a-4e90-bd63-f956598b3c64",
                configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
                buildNumber: 81,
                commitMessage: "first",
                commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
                branchName: "* master\n",
                authorName: "a.adamov",
                status: "Waiting"
            },
        ]
    }
}
const storeConfig = true
it('getBuildsList -удачное получение билд листа', async () => {
    buildsApi.getBuildsList.mockImplementation(() => Promise.resolve(response));

    const thunk = getBuildsTc(storeConfig);

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(4);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.showLoader(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setBuildListData(response.data.data));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, ditailsActions.setBuildDetailsData(response.data.data[0]));
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.showLoader(false));
    
})


it('setNewBuildTc -удачное отправка нового билда', async () => {

    const commitHash = "069dd2e2770277feb3373abe3d7ef52c03f7278a"
    const response = {
        data: {
            data: {
                buildNumber: 83,
                id: "d129da32-dcf2-482a-be52-23dd17ebe65b",
                status: "Waiting",
            }
        }
    }
    buildsApi.postNewBuild.mockImplementation(() => Promise.resolve(response));

    const thunk = setNewBuildTc(commitHash);

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.addNewBuild(true));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.isShowBuildForm(false));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.addNewBuild(false));
})






