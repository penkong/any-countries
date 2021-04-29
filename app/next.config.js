module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth',
        destination: 'http://localhost:5001/api/v1'
      }
    ]
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    apiRoute: process.env.NEXT_PUBLIC_ROUTE // Pass through env variables
  },
  images: {
    loader: 'imgix',
    path: 'https://restcountries.eu/data/swe.svg'
  }
}
