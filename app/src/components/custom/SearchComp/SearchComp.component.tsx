import { ChangeEvent, FC, useState } from 'react'
import { SearchDropDown } from '@components'

interface IPassingProps {
  countries: string[]
}

export const SearchComp: FC<IPassingProps> = ({ countries }) => {
  const [options, setOptions] = useState<string[]>([])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptions(countries.filter(option => option.includes(e.target.value)))
  }

  return (
    <div className="m-auto mt-0 max-w-xs sm:max-w-lg rounded overflow-hidden">
      <p className="p-4">Countries</p>
      <div className="border-b-2 m-0"></div>
      <p className="p-4 pb-1">Select Country: </p>
      <SearchDropDown options={options} onInputChange={onInputChange} />
    </div>
  )
}
