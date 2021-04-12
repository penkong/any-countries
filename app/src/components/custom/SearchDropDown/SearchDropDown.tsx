import { FC, useEffect, useRef, ChangeEvent } from 'react'

interface IPasssingProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: string[]
}

export const SearchDropDown: FC<IPasssingProps> = ({
  options,
  onInputChange
}) => {
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
      ulRef.current.style.display = 'none'
    })
  }, [options])

  return (
    <div className="relative">
      <span className="p-1">
        <div className="relative">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            ref={inputRef}
            onChange={onInputChange}
            className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <br />
      </span>
      <ul
        id="results"
        className="list-reset mt-2 list-group overflow-y-scroll max-h-72 max-w-full"
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
