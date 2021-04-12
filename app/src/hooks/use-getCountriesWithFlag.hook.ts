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
        symbot
      }
    }
  }
`

export const useGetCountriesWithFlag = (cards: {
  [key: string]: IAddCardSuccessResponse | {}
}) => {
  const { data, error, loading } = useQuery(GetAllCountries)
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    if (data) {
      const container: string[] = []
      for (let el of data.getAllCountries) {
        container.push((Object.values(el)[1] as string).toLowerCase())
      }
      setOptions(container)
    }
  }, [data])

  return [options, error, loading]
}
