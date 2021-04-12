/*
 ** Description :
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

import { authReducer } from './auth.reducer'

// ---

export const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>
