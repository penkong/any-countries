import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import { useDispatch } from 'react-redux'
import { AddCountryCardSuccessAction } from '@redux/action-creators'

const GetCountry = gql`
  query GetCountry($term: String!) {
    getCountry(term: $term) {
      name
      population
      flag
      currencies {
        code
        name
        symbol
      }
    }
  }
`

export const useGetCountriesWithFlag = (term: string) => {
  const dispatch = useDispatch()

  const { data, error, loading } = useQuery(GetCountry, {
    variables: {
      term
    },
    ssr: false
  })

  let name: string
  useEffect(() => {
    if (data) {
      let { __typename, ...rest } = data.getCountry[0]
      name = data.getCountry[0].name
      dispatch(AddCountryCardSuccessAction(rest))
    }
  }, [data, loading])

  return [name, error, loading]
}
