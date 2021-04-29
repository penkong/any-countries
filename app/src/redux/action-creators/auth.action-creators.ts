/*
 ** Description :
 */

import axios from 'axios'
import Router from 'next/router'

import { Dispatch } from 'redux'

import { EnumAuthAction } from '@redux/action-enums'
import {
  IAuthFailure,
  IAuthInfo,
  IAuthSuccessResponse
} from '@redux/action-interfaces'

// ---

const ROUTE = process.env.NEXT_PUBLIC_ROUTE

const execAuth = async (path: string, props: IAuthInfo) => {
  const res = await axios.post(path, props)
  return res.data[0]
}

export const AuthRegisterStartAction = (formProps: IAuthInfo) => async (
  dispatch: Dispatch
) => {
  const path = `${ROUTE}/register`

  try {
    const info = await execAuth(path, formProps)
    dispatch(AuthRegisterSuccessAction(info))
    localStorage.setItem('token_c', info.token)
    Router.push('/search')
  } catch (error) {
    dispatch(AuthRegisterFailureAction(error.message))
    return
  }
}

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

export const AuthLogInStartAction = (formProps: IAuthInfo) => async (
  dispatch: Dispatch
) => {
  const path = `${ROUTE}/login`
  try {
    const info: IAuthSuccessResponse = await execAuth(path, formProps)

    dispatch(AuthLogInSuccessAction(info))
    localStorage.setItem('token_c', info.token)
    Router.push('/search')
  } catch (error) {
    dispatch(AuthLogInFailureAction(error.message))
    return
  }
}

export const AuthLogInSuccessAction = (resSuccess: IAuthSuccessResponse) => ({
  type: EnumAuthAction.LOGIN_SUCCESS,
  payload: resSuccess
})

export const AuthLogInFailureAction = (error: IAuthFailure) => ({
  type: EnumAuthAction.LOGIN_FAILURE,
  payload: error
})

// ---

export const AuthLogOutStartAction = () => async (dispatch: Dispatch) => {
  try {
    const path = `${ROUTE}/logout`
    await axios.get(path)
    dispatch(AuthLogOutSuccessAction())
    Router.push('/')
  } catch (error) {
    dispatch(AuthLogOutFailureAction(error.message))
  }
}

export const AuthLogOutSuccessAction = () => ({
  type: EnumAuthAction.LOGOUT_START,
  payload: null
})

export const AuthLogOutFailureAction = (error: IAuthFailure | any) => ({
  type: EnumAuthAction.LOGOUT_FAILURE,
  payload: error
})
