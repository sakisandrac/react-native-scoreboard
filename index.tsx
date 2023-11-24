import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import App from './App';
const store = createStore(rootReducer);

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}