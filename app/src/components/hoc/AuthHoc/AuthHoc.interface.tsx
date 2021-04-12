/*
 ** Description :
 */

import { ChangeEvent, FormEvent } from 'react'

// ---

export interface IAuthProps {
  email: string
  password: string
  confirmPassword?: string
}

export interface IChildrenAuthProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface IAuthHOCProps {
  route: string
  children: (props: IChildrenAuthProps) => JSX.Element
}
