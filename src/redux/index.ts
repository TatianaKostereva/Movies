import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import counterReducer from './counterSlice'
import counterSaga from './counterSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(counterSaga);