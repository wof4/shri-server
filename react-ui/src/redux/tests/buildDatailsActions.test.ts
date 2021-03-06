import { buildDetailsDataType } from "../../types";
import buildDatailsReducer from "../buildDatailsReducer";



type stateType = {
        buildDetailsData: buildDetailsDataType
    }

let state: stateType;
beforeEach(() => {
    state = {
        buildDetailsData: {
            authorName: '',
            branchName: '',
            buildNumber: 0,
            commitHash: '',
            commitMessage: '',
            configurationId: '',
            id: '',
            status: '',
            duration: 0,
            start: '0',
        },
    };
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
    duration: 0,
    start:'0',
}

it('BUILD_DETAILS_DATA', () => {
    const action = { type: 'BUILD_DETAILS_DATA', payload: data } as const
    expect(buildDatailsReducer(state, action)).toEqual({
        ...state,
        buildDetailsData: action.payload
    })
})