/*
 ** Description :
 */

import { AnyAction, Reducer } from 'redux'
import { RouterState } from 'connected-next-router/types'
import { LocationChangeAction } from 'connected-next-router/actions'

import { IAuthSuccessResponse } from './action-interfaces'

// ---

export interface IStoreModel {
  auth: IAuthStateModel
  router: Reducer<RouterState, AnyAction | LocationChangeAction>
}

export interface IAuthStateModel {
  isAuthenticated: boolean
  loading: boolean
  user: IAuthSuccessResponse
  error: string
  message: string
}
