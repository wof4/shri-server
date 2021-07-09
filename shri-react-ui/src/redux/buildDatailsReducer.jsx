const initialState = {
  buildDetailsData: {
    authorName: '',
    branchName: '',
    buildNumber: 0,
    commitHash: '',
    commitMessage: '',
    configurationId: '',
    id: '',
    status: '',
  },
};

const buildDatailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUILD_DETAILS_DATA': {
      return { ...state, buildDetailsData: action.payload };
    }
    default: { return state; }
  }
};

export const ditailsActions = {
  setBuildDetailsData: (payload) => ({ type: 'BUILD_DETAILS_DATA', payload }),
};

export const setNewBuildToStoreTc = (data) => (dispatch) => {
  dispatch(ditailsActions.setBuildDetailsData(data));
};

export default buildDatailsReducer;
