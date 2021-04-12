/*
 ** Description :
 */

import axios from 'axios'
import getConfig from 'next/config'

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import React, { ChangeEvent, useState, FormEvent } from 'react'

import { IAuthHOCProps, IAuthProps } from './AuthHoc.interface'

// ---

// Only holds serverRuntimeConfig and publicRuntimeConfig
const {
  publicRuntimeConfig: { apiRoute }
} = getConfig()

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children, route }) => {
  //

  const router = useRouter()
  const dispatch = useDispatch()

  const [formState, setFormState] = useState<IAuthProps | null>(null)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState!,
      [name]: value
    })
  }

  const onAuthSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(route)
    console.log(formState)
    dispatch(AuthSignInStartAction(formState!))

    try {
      const res = await axios.post(`${apiRoute}/${route}`, formState)
      console.log(res.data[0])
      if (res.data[0].token.length > 0) router.push('/search')
    } catch (error) {
      console.log(error)
    }
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
