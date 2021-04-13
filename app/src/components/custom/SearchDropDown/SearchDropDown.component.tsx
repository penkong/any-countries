import './SearchDropDown.module.css'
import { useDispatch } from 'react-redux'
import { FC, useEffect, useRef, ChangeEvent } from 'react'

import { AddCountryCardStartAction } from '@redux/action-creators'

// ---

interface IPasssingProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: string[]
}

// ---

export const SearchDropDown: FC<IPasssingProps> = ({
  options,
  onInputChange
}) => {
  const dispatch = useDispatch()

  const ulRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.addEventListener(
      'click',
      (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()

        ulRef.current.style.display = 'block'
        ulRef.current.style.display = 'flex-row'

        onInputChange(event)
      }
    )

    document.addEventListener('click', event => {
      if (ulRef) ulRef.current.style.display = 'none'
    })
  }, [options])

  return (
    <div className="absolute">
      <span className="p-1">
        <div className="min-w-max">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            autoComplete="off"
            ref={inputRef}
            onChange={onInputChange}
            className="w-full min-w-max pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <br />
      </span>
      <ul
        id="results"
        className="z-10 specific -mt-5 rounded-md bg-gray-100 relative inline-flex list-reset mt-0 list-group overflow-y-scroll max-h-72 max-w-full"
        ref={ulRef}
      >
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                inputRef.current.value = option
                dispatch(AddCountryCardStartAction(option))
              }}
            >
              <p className="p-2 pl-4 pt-3 block text-black hover:bg-grey-light cursor-pointer">
                {option}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
