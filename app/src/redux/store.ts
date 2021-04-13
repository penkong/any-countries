/*
 ** Description :
 */

import thunk from 'redux-thunk'
import Router from 'next/router'

import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

import {
  createRouterMiddleware,
  initialRouterState
} from 'connected-next-router'

import { rootReducer, RootState } from './reducer'
import { someMiddleware } from './middleware'

import { persistStore, persistReducer } from 'redux-persist'

const storage = require('redux-persist/lib/storage').default

// ---

const routerMiddlware = createRouterMiddleware()

const middlewares = [routerMiddlware, someMiddleware(), thunk]

if (process.env.NODE_ENV === 'development') {
  let logger = createLogger()
  middlewares.push(logger as any)
}

// ---

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }

    if (typeof window !== 'undefined' && state?.router)
      nextState.router = state.router

    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const initStore = context => {
  let initialState
  const { asPath } = context.ctx || Router.router || {}
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath)
    }
  }
  return createStore(reducer, initialState, applyMiddleware(...middlewares))
}

export const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return initStore(reducer)
  } else {
    const persistConfig = {
      key: 'any-country',
      whitelist: ['auth', 'card'], // make sure it does not clash with server keys
      storage
    }

    // const persistedReducer = persistReducer(persistConfig, reducer)
    const persistedReducer = persistReducer<any, any>(
      persistConfig,
      rootReducer
    )
    const store = initStore(persistedReducer)

    // @ts-ignore
    store.__persistor = persistStore(store) // Nasty hack

    return store
  }
}

export const wrapper = createWrapper(makeStore)

export type RootStoreType = typeof initStore
