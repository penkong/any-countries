/*
 ** Description :
 */

import { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

// ---

interface IPassingProps {}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const About: NextPage<IAppProps, IPassingProps> = props => {
  useEffect(() => {}, [])
  return <div>About</div>
}

// ---

export default About
