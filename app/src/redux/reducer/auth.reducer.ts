import produce from 'immer'

import { IAuthAction } from '../action-interfaces'
import { EnumAuthAction } from '@redux/action-enums'
import { IAuthStateModel } from '../store.interface'

// ---

const initUser = {
  id: 0,
  token: '',
  email: '',
  type: '',
  confirmed: false,
  updatedAt: null
}

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
      case EnumAuthAction.REGISTER_SUCCESS:
      case EnumAuthAction.LOGIN_SUCCESS:
        state.isAuthenticated = true
        state.user = action.payload
        state.error = ''
        state.message = ''
        state.loading = false
        return

      case EnumAuthAction.REGISTER_FAILURE:
      case EnumAuthAction.LOGIN_FAILURE:
        state.isAuthenticated = false
        state.user = initUser
        state.loading = false
        state.message = 'Some thing wrong!'
        state.error = action.payload.toString()
        return

      default:
        return state
    }
  }
)
