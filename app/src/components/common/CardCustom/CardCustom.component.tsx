import React from 'react'
import { FC } from 'react'

interface IPassingProps {
  country: any
  cardError: any
  cardLoading: any
}

export const CardCustom: FC<IPassingProps> = ({
  country,
  cardError,
  cardLoading
}) => {
  return (
    <div className="p-2 sm:w-4/4 w-5/6 md:w-2/4 xl:w-1/4 mx-auto max-w">
      <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        {!cardLoading && cardError ? <div>error</div> : null}
        {cardLoading && !cardError ? <div>loading</div> : null}
        {country.name && !cardError && !cardLoading ? (
          <>
            <div className="mb-3">
              <img
                className="max-w-20 max-h-20 mx-auto rounded-lg"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <h2 className="text-xl font-medium text-gray-700">
              {country.name}
            </h2>
            <span className="text-gray-700 block mb-5">
              Population :{' '}
              {parseInt(country.population) > 1000000
                ? `${(parseInt(country.population) / 1000000).toFixed(3)} M`
                : `${parseInt(country.population) / 1000} T`}
            </span>
            <span>
              {country.currencies.map(el => {
                return (
                  <React.Fragment key={el.name + el.symbol}>
                    <span className="text-xs mr-2"> currecny : {el.code}</span>
                    <span className="text-xs">symbol : {el.symbol}</span>
                  </React.Fragment>
                )
              })}
            </span>
          </>
        ) : null}
      </div>
    </div>
  )
}
