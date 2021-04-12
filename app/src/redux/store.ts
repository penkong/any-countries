/*
 ** Description :
 */

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import {
  createRouterMiddleware,
  initialRouterState
} from 'connected-next-router'

// ---

import { rootReducer } from './reducer'
import { someMiddleware } from './middleware'
import Router from 'next/router'

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

export const wrapper = createWrapper(initStore)

export type RootStoreType = typeof initStore
