/*
 ** Description :
 */

import Router from 'next/router'
import { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { useGetAllCountriesCustom } from '@hooks'
import { SearchComp, CardContainer } from '@components'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SearchPage: NextPage<IAppProps, IPassingProps> = () => {
  const [options, error, loading] = useGetAllCountriesCustom()

  useEffect(() => {
    if (!localStorage.getItem('token_c')) {
      Router.push('/')
    }
  }, [])

  if (loading) return <div>Loading</div>
  if (error) return <div>error</div>

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
