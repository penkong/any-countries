import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { IAddCardSuccessResponse } from '@redux/action-interfaces'

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
  const { data, error, loading } = useQuery(GetCountry, {
    variables: {
      term
    }
  })

  const [options, setOptions] = useState<any>(null)

  useEffect(() => {
    console.log(term)
    if (data) {
      console.log(data)
    }
  }, [data, loading])

  return [options, error, loading]
}
