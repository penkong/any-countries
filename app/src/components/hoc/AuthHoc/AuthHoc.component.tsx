/*
 ** Description :
 */

import React, { ChangeEvent, useState, FormEvent } from 'react'
import { IAuthHOCProps, IAuthProps } from './AuthHoc.interface'

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children, route }) => {
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
    console.log(route)
    console.log(formState)
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
