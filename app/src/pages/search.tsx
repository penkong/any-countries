/*
 ** Description :
 */

import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { SearchDropDown } from '@components'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const defaultOptions = []
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`)
  defaultOptions.push(`suggesstion ${i}`)
  defaultOptions.push(`advice ${i}`)
}

const Search: NextPage<IAppProps, IPassingProps> = () => {
  const [options, setOptions] = useState([])
  const onInputChange = event => {
    setOptions(
      defaultOptions.filter(option => option.includes(event.target.value))
    )
  }

  return (
    <div className="App container mt-2 mb-3">
      <h1>Search Bar Dropdown</h1>
      <SearchDropDown options={options} onInputChange={onInputChange} />
      <br />
      <button className="btn btn-primary">Search</button>
    </div>
  )
}

// ---

export default Search
