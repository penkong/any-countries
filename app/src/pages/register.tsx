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

const Register: NextPage<AppProps, IPassingProps> = () => {
  //

  useCheckTokenExist()

  const renderRegister = (props: IChildrenAuthProps) => (
    <AuthPage {...props} register />
  )

  return <AuthHoc route="register">{renderRegister}</AuthHoc>
}

// ---

export default Register
