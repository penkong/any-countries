import { EnumCardCountryAction } from '@redux/action-enums'

export interface IAddCardSuccessResponse {
  name: string
  population: string
  flag: string
  currencies: {
    code: string
    name: string
    symbol: string
  }
}

// ---

export interface IAddCountryCardStartAction {
  type: EnumCardCountryAction.ADD_CART_START
  payload: string
}

export interface IAddCountryCardSuccessAction {
  type: EnumCardCountryAction.ADD_CART_SUCCESS
  payload: IAddCardSuccessResponse
}

export interface IAddCountryCardFailureAction {
  type: EnumCardCountryAction.ADD_CART_FAILURE
  payload: string
}

export type ICardCountryAction =
  | IAddCountryCardStartAction
  | IAddCountryCardSuccessAction
  | IAddCountryCardFailureAction
