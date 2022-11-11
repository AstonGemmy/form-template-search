import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import templateReducer from './slices/template'
import feedbackReducer from './slices/feedback'

const reducers = combineReducers({
  template: templateReducer,
  feedback: feedbackReducer
})

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})

export default store;