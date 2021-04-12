import Router from 'next/router'
import { useEffect } from 'react'

export const useCheckTokenExist = () => {
  useEffect(() => {
    if (localStorage.getItem('token_c')) {
      Router.push('/search')
    }
  }, [])
}
