import { DataSet, TableData } from "types";

export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
export const SET_DATA_ARRAY = 'SET_DATA_ARRAY';
export const SET_ERROR = 'SET_ERROR';
export const SET_FUZZY_SEARCH = 'SET_FUZZY_SEARCH';
export const SET_NETWORK_ERROR = 'SET_NETWORK_ERROR';
export const SET_ALL_DATA = 'SET_ALL_DATA';

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

interface SetFuzzySearchAction {
  type: typeof SET_FUZZY_SEARCH;
  payload: string[];
}

interface SetNetworkErrorAction {
  type: typeof SET_NETWORK_ERROR;
  payload: boolean;
}

interface SetAllDataAction {
  type: typeof SET_ALL_DATA;
  payload: DataSet;
}

export type ActionTypes = SetAllDataAction | SetNetworkErrorAction | SetInputTextAction | SetSearchNameAction | SetDataArrayAction | SetErrorAction | SetFuzzySearchAction;

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

export const setFuzzySearch = (name: string[]): SetFuzzySearchAction => ({
  type: SET_FUZZY_SEARCH,
  payload: name,
});

export const setNetworkError = (error: boolean): SetNetworkErrorAction => ({
  type: SET_NETWORK_ERROR,
  payload: error,
});

export const setAllData = (allData: DataSet): SetAllDataAction => ({
  type: SET_ALL_DATA,
  payload: allData,
});