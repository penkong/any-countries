/*
 ** Description :
 */

import { GetServerSideProps, NextPage } from 'next'
import { useQuery, gql } from '@apollo/client'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const Search: NextPage<IAppProps, IPassingProps> = props => {
  return <div>hellow</div>
}

// ---

export default Search
