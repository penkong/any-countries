/*
 ** Description :
 */

import { gql, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { SearchComp } from '@components'
import { useGetAllCountriesCustom } from '@hooks'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SearchPage: NextPage<IAppProps, IPassingProps> = () => {
  const [options, error, loading] = useGetAllCountriesCustom()

  if (loading || error) return <div>Loading or Error</div>

  return <SearchComp countries={options as string[]} />
}

// ---

export default SearchPage
