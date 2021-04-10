// ------------------------- Pages ------------------------

import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'

// ------------------------- Locals -----------------------

interface IPassingProps {}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---------------------------------------------------------------------

const About: NextPage<IAppProps, IPassingProps> = props => {
	// serverless style . must called on client side .
	useEffect(() => {
		const apiCaller = async () => {
			const { data } = await axios.get('/api/hello')
			console.log(data)
		}
		apiCaller()
	}, [])
	return <div>hellow</div>
}

// -----------------------------------------------------------------------

// About.getInitialProps = async (context: NextPageContext) => {}
// pathName and AppTree does not exist on NextPageContext.
export const getServerSideProps: GetServerSideProps = async context => {
	// const reduxStore = initializeStore()
	// const { dispatch } = reduxStore
	// dispatch({
	//   type: 'TICK',
	//   light: false,
	//   lastUpdate: Date.now(),
	// })
	// return { props: { initialReduxState: reduxStore.getState() } }
	return {
		// will be passed to the page component as props
		props: {}
	}
}

// -----------------------------------------------------------------------

export default About
