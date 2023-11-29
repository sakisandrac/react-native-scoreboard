import { TableData } from 'types';
import { setInputText, setSearchName, setDataArray, setError, SET_INPUT_TEXT, SET_SEARCH_NAME, SET_DATA_ARRAY, SET_ERROR, SET_FUZZY_SEARCH, setFuzzySearch } from '../redux/actions';

describe('Action Creators', () => {
  it('should create an action to set input text', () => {
    const text: string = 'hello';
    const expectedAction = {
      type: SET_INPUT_TEXT,
      payload: text,
    };
    expect(setInputText(text)).toEqual(expectedAction);
  });

  it('should create an action to set search name', () => {
    const name: string = 'John';
    const expectedAction = {
      type: SET_SEARCH_NAME,
      payload: name,
    };
    expect(setSearchName(name)).toEqual(expectedAction);
  });

  it('should create an action to set data', () => {
    const data: TableData[] = [['Harry', 1, 12], ['Ron', 2, 22]]
    const expectedAction = {
      type: SET_DATA_ARRAY,
      payload: data,
    };
    expect(setDataArray(data)).toEqual(expectedAction);
  });

  it('should create an action to set error', () => {
    const err: boolean = true;
    const expectedAction = {
      type: SET_ERROR,
      payload: err,
    };
    expect(setError(err)).toEqual(expectedAction);
  });

  it('should create an action to set fuzzy search array', () => {
    const array: string[] = ['Bo', 'Bob Burger'];
    const expectedAction = {
      type: SET_FUZZY_SEARCH,
      payload: array,
    };
    expect(setFuzzySearch(array)).toEqual(expectedAction);
  });

});
