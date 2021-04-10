/*
 ** Description :
      also there is err field on AppProps
 */

import 'tailwindcss/tailwind.css'
import { AppContext, AppProps } from 'next/app'

// ---

import { AppInitialProps } from 'next/dist/next-server/lib/utils'

// ---

interface IPassingProps {
  currentUser: string | null
}

interface IProps extends IPassingProps, AppProps {}

// ------------------------------------------------------

function MyApp({ Component, pageProps, router, currentUser }: IProps) {
  {
    /*<Header currentUser={currentUser}/>*/
  }
  return <Component {...pageProps} />
}

// ---

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & IPassingProps> => {
  // const { data } = await buildClient(appContext.ctx).get(
  //   '/api/users/currentuser'
  // )

  const data = { currentUser: null }
  let pageProps = {}

  // console.log(appContext.router.isSsr)
  if (appContext.Component.getInitialProps)
    // this call on each page if we want with ctx
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)

  // ...data == currentUser: data.currentUser
  return { pageProps, ...data }
}

// ---

export default MyApp
