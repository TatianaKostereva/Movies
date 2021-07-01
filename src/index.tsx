import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MoviesList from './MoviesList';
import store from './redux';

ReactDOM.render(
  (
    <Provider store={store}>
      <MoviesList />
    </Provider>
  ),
  document.querySelector('#root'),
);