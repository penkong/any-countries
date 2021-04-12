/*
 ** Description :
 */

import { useQuery, gql } from '@apollo/client'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

// ---

interface IPassingProps {}

// NextPage & PassingProps & GetServerSideProps
interface IAppProps extends IPassingProps, GetServerSideProps {}

// ---

const SearchbarDropdown = props => {
  const { options, onInputChange } = props
  const ulRef = useRef(null)
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.addEventListener('click', event => {
      event.stopPropagation()
      ulRef.current.style.display = 'flex'
      onInputChange(event)
    })
    document.addEventListener('click', event => {
      ulRef.current.style.display = 'none'
    })
  }, [])
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={e => {
                inputRef.current.value = option
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          )
        })}
      </ul>
    </div>
  )
}

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
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
      <br />
      <button className="btn btn-primary">Search</button>
    </div>
  )
}

// ---

export default Search
