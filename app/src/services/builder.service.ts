import axios from 'axios'

export const builder = ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_ROUTE,
      headers: req.headers
    })
  } else {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_ROUTE
    })
  }
}
