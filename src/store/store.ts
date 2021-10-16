import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './Reducers/rootReducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  main: rootReducer,
})

export type RootState = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
