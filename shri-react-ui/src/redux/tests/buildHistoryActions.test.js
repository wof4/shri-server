import buildHistoryReducer from "../buildHistoryReducer";


let state;
beforeEach(() => {
state = {
    buildListData: [
        {
            authorName: '',
            branchName: '',
            buildNumber: 0,
            commitHash: '',
            commitMessage: '',
            configurationId: '',
            id: '',
            status: '',
        },
    ],
    ui: {
        isShowBuildForm: false, // показывать ли модальное окно
        isShowLoader: false, // svg loader При загрузке контента
        isAddNewBuild: false, // был ли добавлен новый билд
    },
};
})

it('IS_SHOW_BUILD_FORM', () => {
    const action = { type: 'IS_SHOW_BUILD_FORM', payload: false }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isShowBuildForm: action.payload,
        }
    })
})


it('SHOW_LOADER', () => {
    const action = { type: 'SHOW_LOADER', payload: false }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isShowLoader: action.payload,
        }
    })
})


it('IS_ADD_NEW_BUILD', () => {
    const action = { type: 'IS_ADD_NEW_BUILD', payload: true }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        ui: {
            ...state.ui,
            isAddNewBuild: action.payload,
        }
    })
})


it('SET_BUILD_LIST_DATA', () => {
    const data = {
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
                }
            ]
        }
    }

    const action = { type: 'SET_BUILD_LIST_DATA', payload: data }

    expect(buildHistoryReducer(state, action)).toEqual({
        ...state,
        buildListData: action.payload
    })
})
