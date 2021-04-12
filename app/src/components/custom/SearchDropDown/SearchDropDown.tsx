import { FC, useEffect, useRef, ChangeEvent } from 'react'

interface IPasssingProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: string[]
}

export const SearchDropDown: FC<IPasssingProps> = props => {
  const { options, onInputChange } = props
  const ulRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.addEventListener(
      'click',
      (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()

        ulRef.current.style.display = 'flex-row'

        onInputChange(event)
      }
    )
    document.addEventListener('click', event => {
      ulRef.current.style.display = 'none'
    })
  }, [])

  return (
    <div className="relative">
      <span className="p-2">
        <input
          className="m-auto p-3 border-2 rounded h-8 w-11/12"
          id="search-bar"
          type="text"
          placeholder="Search"
          ref={inputRef}
          onChange={onInputChange}
        />
        <br />
      </span>
      <ul
        id="results"
        className="list-reset mt-2 list-group overflow-y-scroll max-h-72 w-11/12"
        ref={ulRef}
      >
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                inputRef.current.value = option
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
