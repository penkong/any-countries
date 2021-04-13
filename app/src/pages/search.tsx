/*
 ** Description :
 */

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GetServerSideProps, NextPage } from 'next'

import { SearchComp, CardContainer } from '@components'
import { cardSelector, lastAddSelector } from '@redux/selector'
import { useGetAllCountriesCustom, useGetCountriesWithFlag } from '@hooks'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SearchPage: NextPage<IAppProps, IPassingProps> = () => {
  const [options, error, loading] = useGetAllCountriesCustom()

  const cards = useSelector(cardSelector)

  if (loading || error) return <div>Loading or Error</div>

  return (
    <>
      <SearchComp countries={options as string[]} />
      <div className="object-center">
        <CardContainer />
      </div>
    </>
  )
}

// ---

export default SearchPage
