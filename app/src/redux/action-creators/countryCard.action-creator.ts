/*
 ** Description :
 */

import { EnumCardCountryAction } from '@redux/action-enums'
import { gql, useQuery } from '@apollo/client'
import { data } from 'autoprefixer'

// ---

const GetAllCountries = gql`
  query GetAllCountries {
    getAllCountries {
      name
    }
  }
`

export const AddCountryCardStartAction = (term: string) => {
  console.log(term)
  return {
    type: EnumCardCountryAction.ADD_CART_START,
    payload: term
  }
}
