import produce from 'immer'

import { ICardCountryAction } from '../action-interfaces'
import { EnumCardCountryAction } from '@redux/action-enums'
import { ICardCountryStateModel } from '@redux/store.interface'

// ---

const initialState: ICardCountryStateModel = {
  num: 0,
  cards: {},
  lastAdd: ''
  // ...
}

// ---

export const cardReducer = produce(
  (
    state: ICardCountryStateModel = initialState,
    action: ICardCountryAction
  ) => {
    switch (action.type) {
      case EnumCardCountryAction.ADD_CART_START:
        if (state.cards[action.payload]) return
        state.cards[action.payload] = {}
        state.num++
        return

      case EnumCardCountryAction.ADD_CART_SUCCESS:
      case EnumCardCountryAction.ADD_CART_FAILURE:
      default:
        return state
    }
  }
)
