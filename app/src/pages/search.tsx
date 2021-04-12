/*
 ** Description :
 */

import { gql, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GetServerSideProps, NextPage } from 'next'

import { SearchComp } from '@components'
import { cardSelector } from '@redux/selector'
import { useGetAllCountriesCustom } from '@hooks'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SearchPage: NextPage<IAppProps, IPassingProps> = () => {
  const [options, error, loading] = useGetAllCountriesCustom()
  const cards = useSelector(cardSelector)
  const [] = useGetCountriesWithFlag(cards.cards)

  if (loading || error) return <div>Loading or Error</div>

  return (
    <>
      <SearchComp countries={options as string[]} />
    </>
  )
}

// ---

export default SearchPage
