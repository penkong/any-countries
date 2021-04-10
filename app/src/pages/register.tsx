/*
 ** Description :
 */
import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Link from 'next/link'
import { useEffect, FormEvent } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { FormRow, FormButton } from '../components/'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface AppProps extends IPassingProps, GetServerSideProps {}

// ---

const Register: NextPage<AppProps, IPassingProps> = props => {
  useEffect(() => {}, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
  }

  const onChange = e

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={onSubmit} className="px-5 py-7">
            <FormRow label="E-mail" />
            <FormRow label="Password" />
            <FormRow label="Confrim Password" />
            <FormButton text="Register" />
          </form>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <Link href="/">
                <span className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-4">Back to Login!</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <div className={styles.container}>
//   <Head>
//     <title>Create Next App</title>
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
// </div>

// ---

export default Register
