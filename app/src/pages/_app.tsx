/*
 ** Description :
      also there is err field on AppProps
 */

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Router from 'next/router'
import NProgress from 'nprogress'

import { AppContext, AppProps } from 'next/app'
import { ConnectedRouter } from 'connected-next-router'
import { AppInitialProps } from 'next/dist/next-server/lib/utils'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// import { builder } from '../services/'
import { wrapper } from '../redux/store'
// ---

// ---

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// ---

interface IPassingProps {
  currentUser: string | null
}

interface IProps extends IPassingProps, AppProps {}

// ------------------------------------------------------

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache()
})

// ---

function MyApp({ Component, pageProps, currentUser }: IProps) {
  //

  return (
    <ApolloProvider client={client}>
      <ConnectedRouter>
        <Component currentUser={currentUser} {...pageProps} />
      </ConnectedRouter>
    </ApolloProvider>
  )
}

// ---

MyApp.getInitialProps = async ({
  Component,
  ctx
}: AppContext): Promise<(AppInitialProps & IPassingProps) | {}> => {
  // const { req } = ctx
  // const client = builder({ req })
  // const { data } = await client.get('/current-user')

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // @ts-ignore
  pageProps.query = ctx.query

  return { pageProps }
}

export default wrapper.withRedux(MyApp)
