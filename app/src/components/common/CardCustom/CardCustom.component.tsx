import { useGetCountriesWithFlag } from '@hooks'
import { lastAddSelector } from '@redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const CardCustom = () => {
  const term = useSelector(lastAddSelector)
  const [country, cardError, cardLoading] = useGetCountriesWithFlag(term)
  useEffect(() => {
    if (country) console.log(country)
  }, [country, cardLoading])
  return (
    <div className="p-2 sm:w-4/4 w-5/6 md:w-2/4 xl:w-1/4 mx-auto">
      <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div className="mb-3">
          <img
            className="w-auto mx-auto rounded-full"
            src="https://i.pravatar.cc/150?img=66"
            alt=""
          />
        </div>
        <h2 className="text-xl font-medium text-gray-700">Pande Muliada</h2>
        <span className="text-blue-500 block mb-5">Front End Developer</span>

        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full">
          Hire
        </a>
      </div>
    </div>
  )
}
