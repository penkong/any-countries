/*
 ** Description :
 */

import { /*AnyAction*/ Reducer } from 'redux'
import { RouterState } from 'connected-next-router/types'
import { LocationChangeAction } from 'connected-next-router/actions'
import { IAuthAction, ICardCountryAction } from './action-interfaces/'

import {
  IAddCardSuccessResponse,
  IAuthSuccessResponse
} from './action-interfaces'

// ---

export interface IStoreModel {
  auth: IAuthStateModel
  card: ICardCountryStateModel[]
  router: Reducer<
    RouterState,
    IAuthAction | ICardCountryAction | LocationChangeAction
  >
}

export interface IAuthStateModel {
  isAuthenticated: boolean
  loading: boolean
  user: IAuthSuccessResponse
  error: string
  message: string
}

export interface ICardCountryStateModel {
  num: number // number of cards in store
  cards: {
    [key: string]: IAddCardSuccessResponse | {}
  }
  // more will come who knows?
}
