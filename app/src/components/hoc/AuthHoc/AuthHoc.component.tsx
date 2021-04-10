/*
 ** Description :
 */

import React, { ChangeEvent, useState, FormEvent } from 'react'
import { IAuthHOCProps, IAuthProps } from './AuthHoc.interface'

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children }) => {
  //

  const [formState, setFormState] = useState<IAuthProps | null>(null)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState!,
      [name]: value
    })
  }

  const onAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
