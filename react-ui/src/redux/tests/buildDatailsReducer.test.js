const { setNewBuildToStoreTc, ditailsActions } = require("../buildDatailsReducer");
const dispatchMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear()
})

const data = {
    authorName: "a.adamov",
    branchName: "* master\n",
    buildNumber: 82,
    commitHash: "069dd2e2770277feb3373abe3d7ef52c03f7278a",
    commitMessage: "first",
    configurationId: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
    id: "5b1c472d-4c99-4caa-b721-39b2d0050c67",
    status: "Waiting",
}

it('setNewBuildToStoreTc', () => {
    const thunk = setNewBuildToStoreTc(data);

    thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, ditailsActions.setBuildDetailsData(data));
})
