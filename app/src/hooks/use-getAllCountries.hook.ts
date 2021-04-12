import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const GetAllCountries = gql`
  query GetAllCountries {
    getAllCountries {
      name
    }
  }
`

export const useGetAllCountriesCustom = () => {
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
