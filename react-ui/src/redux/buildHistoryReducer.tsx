import buildsApi from '../api/apiBuilds';
import { BaseThunkType, buildListData, buildListDataUiType, InferActionsTypes } from '../types';
import { ditailsActions } from './buildDatailsReducer';

type initialStateType = {
  buildListData: Array<buildListData>
  ui: buildListDataUiType
}

const initialState: initialStateType = {
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
      start: '0',
      duration: 0
    },
  ],
  ui: {
    isShowBuildForm: false, // показывать ли модальное окно
    isShowLoader: false, // svg loader При загрузке контента
    isAddNewBuild: false, // был ли добавлен новый билд
  },
};

const buildHistoryReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'IS_SHOW_BUILD_FORM': {
      return { ...state, ui: { ...state.ui, isShowBuildForm: action.payload } };
    }
    case 'SHOW_LOADER': {
      return { ...state, ui: { ...state.ui, isShowLoader: action.payload } };
    }
    case 'IS_ADD_NEW_BUILD': {
      return { ...state, ui: { ...state.ui, isAddNewBuild: action.payload } };
    }
    case 'SET_BUILD_LIST_DATA': {
      return { ...state, buildListData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const actions = {
  isShowBuildForm: (payload: boolean) => ({ type: 'IS_SHOW_BUILD_FORM', payload } as const),
  addNewBuild: (payload: boolean) => ({ type: 'IS_ADD_NEW_BUILD', payload } as const),
  showLoader: (payload: boolean) => ({ type: 'SHOW_LOADER', payload } as const),
  setBuildListData: (payload: Array<buildListData>) => ({ type: 'SET_BUILD_LIST_DATA', payload } as const),
};

export const getBuildsTc = (storeConfig: boolean): thunkType => (dispatch) => {
  dispatch(actions.showLoader(true));
  if (storeConfig === true) {
    buildsApi.getBuildsList().then((response) => {
      if (response.statusText === 'OK') {
        dispatch(actions.setBuildListData(response.data.data));
        dispatch(ditailsActions.setBuildDetailsData(response.data.data[0]));
      } else {
        // eslint-disable-next-line no-console
        console.log('неудача загрузки билд листа');
      }
      dispatch(actions.showLoader(false));
    });
  } else {
    //  console.log('в сторе настроек нет ненужно делать запрос за билдами');
    dispatch(actions.showLoader(false));
  }
};

export const setNewBuildTc = (commitHash: { commitHash: string }): thunkType => (dispatch) => {
  // eslint-disable-next-line no-console
  // console.log('добавление нового билда');
  // console.log(commitHash)
  buildsApi.postNewBuild(commitHash).then((response) => {
    console.log(response)
    if (response.data.data.buildNumber && response.data.data.id && response.data.data.status) {
      // eslint-disable-next-line no-console
      //  console.log('новый билд был добавлен', response);
      dispatch(actions.addNewBuild(true));
      dispatch(actions.isShowBuildForm(false));
      dispatch(actions.addNewBuild(false));
    } else {
      // eslint-disable-next-line no-console
      // console.log('в данном репозитории комит отсутствует');
    }
  });
};

export default buildHistoryReducer;


type actionsType = InferActionsTypes<typeof ditailsActions | typeof actions>
type thunkType = BaseThunkType<actionsType>