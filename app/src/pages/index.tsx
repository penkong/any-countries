/*
 ** Description :
 */

import Head from 'next/head'
import { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import styles from '../styles/Home.module.css'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface AppProps extends IPassingProps, GetServerSideProps {}

// ---

const Landing: NextPage<AppProps, IPassingProps> = props => {
  useEffect(() => {}, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>index page</div>
    </div>
  )
}

// ---

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {} // will be passed to the page component as props
  }
}

// ---

export default Landing
