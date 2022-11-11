import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import templateReducer from './slices/template'

const reducers = combineReducers({
  template: templateReducer
})

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})

export default store;