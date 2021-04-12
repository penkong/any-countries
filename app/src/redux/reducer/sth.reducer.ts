import produce from 'immer'

// ---

import { STHActionTypeEnum } from '../action-enums'
import { SthAction } from '../action-interfaces'

// ---

interface INewState {
  sth: string
}

const initialState: INewState = {
  sth: 'hellow'
}

// ---

export const sthReducer = produce(
  (state: INewState = initialState, action: SthAction) => {
    switch (action.type) {
      case STHActionTypeEnum.STH:
        return { sth: 'this is changed' }
      default:
        return state
    }
  }
)
