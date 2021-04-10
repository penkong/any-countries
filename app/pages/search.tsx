/*
 ** Description :
 */

import { GetServerSideProps, NextPage } from 'next'

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
