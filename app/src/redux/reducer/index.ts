/*
 ** Description :
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

import { authReducer } from './auth.reducer'
import { cardReducer } from './cardCountry.reducer'

// ---

export const rootReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
  router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>
