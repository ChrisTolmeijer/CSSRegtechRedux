import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { FilingsReducer } from './state/reducers/FilingsReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

import './index.css';

// export default combineReducers({});

const store = createStore(FilingsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);