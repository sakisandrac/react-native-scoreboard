export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_SEARCH_NAME = 'SET_SEARCH_NAME';

interface SetInputTextAction {
  type: typeof SET_INPUT_TEXT;
  payload: string;
}

interface SetSearchNameAction {
  type: typeof SET_SEARCH_NAME;
  payload: string;
}

export type ActionTypes = SetInputTextAction | SetSearchNameAction;

export const setInputText = (text: string): SetInputTextAction => ({
  type: SET_INPUT_TEXT,
  payload: text,
});

export const setSearchName = (name: string): SetSearchNameAction => ({
  type: SET_SEARCH_NAME,
  payload: name,
});
