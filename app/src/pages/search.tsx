/*
 ** Description :
 */

import { useQuery, gql } from '@apollo/client'
import { GetServerSideProps, NextPage } from 'next'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const Search: NextPage<IAppProps, IPassingProps> = () => {
  return <div>hellow</div>
}

// ---

export default Search
