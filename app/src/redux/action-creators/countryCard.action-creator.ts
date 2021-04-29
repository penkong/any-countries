/*
 ** Description :
 */

import { EnumCardCountryAction } from '@redux/action-enums'
import { IAddCardSuccessResponse } from '@redux/action-interfaces'

// ---

export const AddCountryCardStartAction = (term: string) => ({
  type: EnumCardCountryAction.ADD_CART_START,
  payload: term
})

export const AddCountryCardSuccessAction = (info: IAddCardSuccessResponse) => ({
  type: EnumCardCountryAction.ADD_CART_SUCCESS,
  payload: info
})
