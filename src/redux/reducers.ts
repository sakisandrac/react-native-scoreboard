import { TableData } from 'types';
import { ActionTypes, SET_INPUT_TEXT, SET_SEARCH_NAME, SET_DATA_ARRAY, SET_ERROR } from './actions';

export interface StateType {
  inputText: string;
  searchName: string;
  dataArray: TableData[]; // Assuming TableData type is defined somewhere
  error: boolean;
}

const initialState: StateType = {
  inputText: '',
  searchName: '',
  dataArray: [],
  error: false,
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
    default:
      return state;
  }
};

export default userReducer;
