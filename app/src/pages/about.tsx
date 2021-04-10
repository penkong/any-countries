/*
 ** Description :
 */

import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'

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

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {}
  }
}

// ---

export default About
