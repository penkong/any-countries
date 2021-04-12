import { ChangeEvent, FC, useState } from 'react'
import { SearchDropDown } from '@components'

interface IPassingProps {
  countries: string[]
}

export const SearchComp: FC<IPassingProps> = ({ countries }) => {
  const [options, setOptions] = useState<string[] | []>([])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptions(countries.filter(option => option.includes(e.target.value)))
  }

  // return (
  //   <div className="App container mt-2 mb-3">
  //     <h1>Search Bar Dropdown</h1>
  //     <SearchDropDown options={options} onInputChange={onInputChange} />
  //   </div>
  // )

  return (
    <div className="m-auto max-w-lg rounded overflow-hidden">
      <p className="p-4">Countries</p>
      <div className="border-b-2 m-0"></div>
      <p className="p-4">Select Country: </p>
      <SearchDropDown options={options} onInputChange={onInputChange} />
    </div>
  )
}
//   <p className="p-4">Countries</p>
//   <div className="border-b-2 m-0"></div>
//   <p className="p-4">Select Country: </p>
