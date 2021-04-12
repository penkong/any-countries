/*
 ** Description :
 */

import { EnumAuthAction } from '@redux/action-enums'
import {
  IAuthFailure,
  IAuthInfo,
  IAuthSuccessResponse
} from '@redux/action-interfaces'

// ---

// --------------- SIGN IN ACTIONS ---------------

export const AuthRegisterStartAction = (formProps: IAuthInfo) => ({
  type: EnumAuthAction.REGISTER_START,
  payload: formProps
})

export const AuthRegisterSuccessAction = (
  resSuccess: IAuthSuccessResponse
) => ({
  type: EnumAuthAction.REGISTER_SUCCESS,
  payload: resSuccess
})

export const AuthRegisterFailureAction = (error: IAuthFailure) => ({
  type: EnumAuthAction.REGISTER_FAILURE,
  payload: error
})

// ---

export const AuthLogInStartAction = (formProps: IAuthInfo) => ({
  type: EnumAuthAction.LOGIN_START,
  payload: formProps
})

export const AuthLogInSuccessAction = (resSuccess: IAuthSuccessResponse) => ({
  type: EnumAuthAction.LOGIN_SUCCESS,
  payload: resSuccess
})

export const AuthLogInFailureAction = (error: IAuthFailure) => ({
  type: EnumAuthAction.LOGIN_FAILURE,
  payload: error
})

// ---

export const AuthLogOutStartAction = () => ({
  type: EnumAuthAction.LOGOUT_START,
  payload: null
})

export const AuthLogOutSuccessAction = () => ({
  type: EnumAuthAction.LOGOUT_START,
  payload: null
})

export const AuthLogOutFailureAction = (error: IAuthFailure | any) => ({
  type: EnumAuthAction.LOGOUT_FAILURE,
  payload: error
})
