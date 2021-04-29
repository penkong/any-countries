import Router from 'next/router'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import {
  AddCountryCardSuccessAction,
  AuthLogInSuccessAction
} from '@redux/action-creators'

// ---

export const useCheckTokenExist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    //

    if (localStorage.getItem('token_c')) {
      dispatch(AuthLogInSuccessAction(JSON.parse(localStorage.getItem('user'))))
      Router.push('/search')
      // if (localStorage.getItem('cards'))
      //   dispatch(
      //     AddCountryCardSuccessAction(JSON.parse(localStorage.getItem('cards')))
      //   )
    }
  }, [])
}
