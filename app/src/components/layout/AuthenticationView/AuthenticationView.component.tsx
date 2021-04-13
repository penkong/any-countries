/*
 ** Description :
 */

import { FC } from 'react'

// ---

export const AuthenticationView: FC = ({ children }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">AnyFin</h1>
      <div className="p-1 flex flex-row justify-center mb-3">
        <img src="https://restcountries.eu/data/swe.svg" className="w-16" />
      </div>
      <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        {children}
      </div>
    </div>
  </div>
)
