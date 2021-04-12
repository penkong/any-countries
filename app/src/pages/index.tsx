/*
 ** Description :
 */

import '../styles/Home.module.css'

import { GetServerSideProps, NextPage } from 'next'

import { useCheckTokenExist } from '@hooks'
import { AuthHoc, AuthPage, IChildrenAuthProps } from '@components'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface AppProps extends IPassingProps, GetServerSideProps {}

// ---

const Landing: NextPage<AppProps, IPassingProps> = () => {
  //

  useCheckTokenExist()

  const renderLogin = (props: IChildrenAuthProps) => <AuthPage {...props} />

  return <AuthHoc route="login">{renderLogin}</AuthHoc>
}

// ---

export default Landing
