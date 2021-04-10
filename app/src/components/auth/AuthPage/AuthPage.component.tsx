import React, { ChangeEvent, FC, FormEvent } from 'react'
import { AuthenticationView, FormButton, FormRow, RedirectButton } from '../..'

// ---

interface IPassingProps {
  register?: boolean
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const AuthPage: FC<IPassingProps> = ({
  register,
  onAuthSubmit,
  onChangeInput
}) => {
  return (
    <AuthenticationView>
      <form onSubmit={onAuthSubmit} className="px-5 py-7">
        <FormRow label="E-mail" name="email" onChange={onChangeInput} />
        <FormRow label="Password" name="password" onChange={onChangeInput} />
        {register && (
          <FormRow
            label="Confirim Password"
            name="confirmPassword"
            onChange={onChangeInput}
          />
        )}
        <FormButton text="Login" />
      </form>
      <RedirectButton
        href={register ? '' : 'register'}
        text={register ? 'Go Back Login Page' : "Haven't Account ? Register"}
      />
    </AuthenticationView>
  )
}
