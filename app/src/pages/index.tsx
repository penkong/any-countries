/*
 ** Description :
 */
import styles from '../styles/Home.module.css'

import { useEffect, FormEvent, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import {
  FormRow,
  FormButton,
  RedirectButton,
  AuthenticationView
} from '../components/'

// ---

interface IFormState {
  email: string
  password: string
}

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface AppProps extends IPassingProps, GetServerSideProps {}

// ---

const Landing: NextPage<AppProps, IPassingProps> = props => {
  //

  const [state, setState] = useState<IFormState | null>(null)

  useEffect(() => {}, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <AuthenticationView>
      <form onSubmit={onSubmit} className="px-5 py-7">
        <FormRow label="E-mail" name="email" />
        <FormRow label="Password" name="password" />
        <FormButton text="Login" />
      </form>
      <RedirectButton />
    </AuthenticationView>
  )
}

// <div className={styles.container}>
//   <Head>
//     <title>Create Next App</title>
//     <link rel="icon" href="/favicon.ico" />
//   </Head>

//   <div>index page</div>
// </div>
// ---

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {} // will be passed to the page component as props
  }
}

// ---

export default Landing
