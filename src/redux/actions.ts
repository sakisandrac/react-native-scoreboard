import { TableData } from "types";

export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
export const SET_DATA_ARRAY = 'SET_DATA_ARRAY';
export const SET_ERROR = 'SET_ERROR';

interface SetInputTextAction {
  type: typeof SET_INPUT_TEXT;
  payload: string;
}

interface SetSearchNameAction {
  type: typeof SET_SEARCH_NAME;
  payload: string;
}

interface SetDataArrayAction {
  type: typeof SET_DATA_ARRAY;
  payload: TableData[];
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: boolean;
}

export type ActionTypes = SetInputTextAction | SetSearchNameAction | SetDataArrayAction | SetErrorAction;

export const setInputText = (text: string): SetInputTextAction => ({
  type: SET_INPUT_TEXT,
  payload: text,
});

export const setSearchName = (name: string): SetSearchNameAction => ({
  type: SET_SEARCH_NAME,
  payload: name,
});

export const setDataArray = (dataArray: TableData[]): SetDataArrayAction => ({
  type: SET_DATA_ARRAY,
  payload: dataArray,
});

export const setError = (error: boolean): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});
