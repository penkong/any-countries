import { EnumAuthAction } from '@redux/action-enums'

export interface IAuthInfo {
  email: string
  password: string
  confirmPassword?: string
}

export interface IAuthSuccessResponse {
  token: string
  id: number
  email: string
  confirmed: boolean
  type: string // it will become enum
  updatedAt: Date
}

export interface IAuthFailure {
  errors: { message: string }[]
}

// ---

export interface IAuthRegisterStartAction {
  type: EnumAuthAction.REGISTER_START
  payload: IAuthInfo
}

export interface IAuthRegisterSuccessAction {
  type: EnumAuthAction.REGISTER_SUCCESS
  payload: IAuthSuccessResponse
}

export interface IAuthRegisterFailureAction {
  type: EnumAuthAction.REGISTER_FAILURE
  payload: IAuthFailure
}

// ---

export interface IAuthLogInStartAction {
  type: EnumAuthAction.LOGIN_START
  payload: IAuthInfo
}

export interface IAuthLogInSuccessAction {
  type: EnumAuthAction.LOGIN_SUCCESS
  payload: IAuthSuccessResponse
}

export interface IAuthLogInFailureAction {
  type: EnumAuthAction.LOGIN_FAILURE
  payload: IAuthFailure
}

// ---

export interface IAuthLogOutStartAction {
  type: EnumAuthAction.LOGOUT_START
  payload: null
}

export interface IAuthLogOutSuccessAction {
  type: EnumAuthAction.LOGOUT_SUCCESS
  payload: null
}

export interface IAuthLogOutFailureAction {
  type: EnumAuthAction.LOGOUT_FAILURE
  payload: IAuthFailure | any
}

// ---

export type IAuthAction =
  | IAuthRegisterStartAction
  | IAuthRegisterSuccessAction
  | IAuthRegisterFailureAction
  | IAuthLogInStartAction
  | IAuthLogInSuccessAction
  | IAuthLogInFailureAction
  | IAuthLogOutStartAction
  | IAuthLogOutSuccessAction
  | IAuthLogOutFailureAction
