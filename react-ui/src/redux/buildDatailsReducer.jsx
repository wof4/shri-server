import buildsApi from '../api/apiBuilds';

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
    logs: '',
  },
};

const buildDatailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUILD_DETAILS_DATA': {
      return { ...state, buildDetailsData: action.payload };
    }
    case 'SET_LOGS': {
      return { ...state, buildDetailsData: { ...state.buildDetailsData, logs: action.payload } };
    }
    default: { return state; }
  }
};

export const ditailsActions = {
  setBuildDetailsData: (payload) => ({ type: 'BUILD_DETAILS_DATA', payload }),
  setLogs: (payload) => ({ type: 'SET_LOGS', payload }),
};

export const setNewBuildToStoreTc = (data) => (dispatch) => {
  dispatch(ditailsActions.setBuildDetailsData(data));
  buildsApi.getBuildsLogs(data.id).then((response) => {
    dispatch(ditailsActions.setLogs(response.data));
  });
};

export default buildDatailsReducer;
