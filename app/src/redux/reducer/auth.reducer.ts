import produce from 'immer'

import { IAuthAction } from '../action-interfaces'
import { IAuthStateModel } from '../store.interface'

// ---

const initialState: IAuthStateModel = {
  isAuthenticated: false,
  loading: false,
  user: {
    id: 0,
    token: '',
    email: '',
    type: '',
    confirmed: false,
    updatedAt: null
  },
  error: '',
  message: ''
}

// ---

export const authReducer = produce(
  (state: IAuthStateModel = initialState, action: IAuthAction) => {
    switch (action.type) {
      default:
        return state
    }
  }
)
