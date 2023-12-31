import userReducer from '../redux/reducers';
import { StateType } from '../redux/reducers';
import { setInputText, setSearchName, setDataArray, setError, setNetworkError, setFuzzySearch, setAllData } from '../redux/actions';
import { TableData } from 'types';
import { testData } from './testData';

describe('Reducers', () => {
  const initialState: StateType = {
    inputText: '',
    searchName: '',
    dataArray: [],
    error: false,
    fuzzySearch: [],
    allData: {},
    networkError: false
  };

  it('should handle SET_INPUT_TEXT action', () => {
    const text: string = 'hello';
    const action = setInputText(text);
    const newState = userReducer(initialState, action);
    expect(newState.inputText).toEqual(text);
  });

  it('should handle SET_SEARCH_NAME action', () => {
    const name: string = 'John';
    const action = setSearchName(name);
    const newState = userReducer(initialState, action);
    expect(newState.searchName).toEqual(name);
  });

  it('should handle SET_DATA_ARRAY action', () => {
    const data: TableData[] = [['Harry', 1, 12], ['Ron', 2, 22]];
    const action = setDataArray(data);
    const newState = userReducer(initialState, action);
    expect(newState.dataArray).toEqual(data);
  });

  it('should handle SET_ERROR action', () => {
    const err: boolean = false;
    const action = setError(err);
    const newState = userReducer(initialState, action);
    expect(newState.error).toEqual(err);
  });

  it('should handle SET_FUZZY_SEARCH action', () => {
    const array: string[] = ['Bo', 'Bob Burger'];
    const action = setFuzzySearch(array);
    const newState = userReducer(initialState, action);
    expect(newState.fuzzySearch).toEqual(array);
  });

  it('should handle SET_NETWORK_ERROR action', () => {
    const err: boolean = false;
    const action = setNetworkError(err);
    const newState = userReducer(initialState, action);
    expect(newState.error).toEqual(err);
  });

  it('should handle SET_ALL_DATA action', () => {
    const action = setAllData(testData);
    const newState = userReducer(initialState, action);
    expect(newState.allData).toEqual(testData);
  });

});