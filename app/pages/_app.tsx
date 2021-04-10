// --------------------- Packages -----------------------

import { AppContext, AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

// --------------------- Locals -------------------------

import { useStore } from '../redux'
import { AppInitialProps } from 'next/dist/next-server/lib/utils'

// ------------------------------------------------------

interface IPassingProps {
	currentUser: string | null
}

// also there is err field on AppProps
interface IProps extends IPassingProps, AppProps {}

// ------------------------------------------------------

function MyApp({ Component, pageProps, router, currentUser }: IProps) {
	// const store = useStore(pageProps.initialReduxState)
	const store = useStore({})
	{/*<Header currentUser={currentUser}/>*/}
	return (
			<Component {...pageProps} />
	)
}
// read utility types typescript
// ------------------------------------------------------
// prefer use AppContext rather than AppContextType
// AppContext is with advanced Router
MyApp.getInitialProps = async (
	appContext: AppContext
): Promise<AppInitialProps & IPassingProps> => {
	// how add current user to header
	// const { data } = await buildClient(appContext.ctx).get(
	//   '/api/users/currentuser'
	// )
	const data = { currentUser: null }
	let pageProps = {}
	// console.log(appContext.router.isSsr)
	if (appContext.Component.getInitialProps) {
		// this call on each page if we want with ctx
		pageProps = await appContext.Component.getInitialProps(appContext.ctx)
	}

	// ...data == currentUser: data.currentUser
	return { pageProps, ...data }
}
export default MyApp
