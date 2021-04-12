/*
 ** Description :
 */

import React, { ChangeEvent, FC, FormEvent } from 'react'

import { AuthenticationView, FormButton, FormRow, RedirectButton } from '../..'

// ---

interface IPassingProps {
  register?: boolean
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
}

// ---

const s = {
  register: 'register',
  back: 'Go Back Login Page',
  goRegister: "Haven't Account ? Register"
}

export const AuthPage: FC<IPassingProps> = ({
  register,
  onAuthSubmit,
  onChangeInput
}) => {
  return (
    <AuthenticationView>
      <form onSubmit={onAuthSubmit} className="px-5 py-7">
        <FormRow
          type="email"
          label="E-mail"
          name="email"
          onChange={onChangeInput}
        />
        <FormRow
          type="password"
          label="Password"
          name="password"
          onChange={onChangeInput}
        />
        {register && (
          <FormRow
            type="password"
            label="Confirim Password"
            name="confirmPassword"
            onChange={onChangeInput}
          />
        )}
        <FormButton text="Login" />
      </form>
      <RedirectButton
        href={register ? '' : s.register}
        text={register ? s.back : s.goRegister}
      />
    </AuthenticationView>
  )
}
