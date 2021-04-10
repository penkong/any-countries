/*
 ** Description :
 */

import { FC, ChangeEvent } from 'react'

// ---

interface IPassingProps {
  label: string
  name: string
  value?: string
  placeHolder?: string
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void
}

// ---

export const FormRow: FC<IPassingProps> = ({
  label,
  name,
  value,
  placeHolder,
  onChange
}) => {
  return (
    <>
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {label.trim()}
      </label>
      <input
        value={value}
        name={name.trim()}
        id={name}
        aria-describedby={`${label}Help`}
        placeholder={placeHolder}
        onChange={onChange}
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
      />
    </>
  )
}
