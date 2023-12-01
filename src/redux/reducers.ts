import { TableData, DataSet } from 'types';
import { ActionTypes, SET_INPUT_TEXT, SET_SEARCH_NAME, SET_DATA_ARRAY, SET_ERROR, SET_FUZZY_SEARCH, SET_NETWORK_ERROR, SET_ALL_DATA } from './actions';

export interface StateType {
  inputText: string;
  searchName: string;
  dataArray: TableData[];
  error: boolean;
  fuzzySearch: string[],
  allData: DataSet,
  networkError: boolean
}

const initialState: StateType = {
  inputText: '',
  searchName: '',
  dataArray: [],
  error: false,
  fuzzySearch: [],
  allData: {},
  networkError: false
};

const userReducer = (state = initialState, action: ActionTypes): StateType => {
  switch (action.type) {
    case SET_INPUT_TEXT:
      return { ...state, inputText: action.payload };
    case SET_SEARCH_NAME:
      return { ...state, searchName: action.payload };
    case SET_DATA_ARRAY:
      return { ...state, dataArray: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_FUZZY_SEARCH:
      return { ...state, fuzzySearch: action.payload };
    case SET_NETWORK_ERROR:
      return { ...state, networkError: action.payload };
    case SET_ALL_DATA:
      return { ...state, allData: action.payload }
    default:
      return state;
  }
};

export default userReducer;
