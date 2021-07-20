import buildsApi from '../api/apiBuilds';
import { BaseThunkType, buildDetailsDataType, InferActionsTypes} from '../types';
import { actions } from './settingsReducer';

export type initialStateType = {
  buildDetailsData: buildDetailsDataType
}

const initialState: initialStateType = {
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
    duration: 0,
    start: '0',
  },
};

const buildDatailsReducer = (state = initialState, action: actionsType) => {
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
  setBuildDetailsData: (payload : buildDetailsDataType) => ({ type: 'BUILD_DETAILS_DATA', payload }as const),
  setLogs: (payload : string) => ({ type: 'SET_LOGS', payload }as const),
};

export const setNewBuildToStoreTc = (data: buildDetailsDataType):thunkType => (dispatch) => {
  dispatch(ditailsActions.setBuildDetailsData(data));
  buildsApi.getBuildsLogs(data.id).then((response) => {
    dispatch(ditailsActions.setLogs(response.data));
  });
};

export default buildDatailsReducer;

export type actionsType = InferActionsTypes<typeof actions | typeof ditailsActions >
type thunkType = BaseThunkType<actionsType>