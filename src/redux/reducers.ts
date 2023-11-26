import { ActionTypes, SET_INPUT_TEXT, SET_SEARCH_NAME } from './actions';

interface StateType {
  inputText: string;
  searchName: string;
}

const initialState: StateType = {
  inputText: '',
  searchName: '',
};

const userReducer = (state = initialState, action: ActionTypes): StateType => {
  switch (action.type) {
    case SET_INPUT_TEXT:
      return { ...state, inputText: action.payload };
    case SET_SEARCH_NAME:
      return { ...state, searchName: action.payload };
    default:
      return state;
  }
};

export default userReducer;
