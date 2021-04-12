import { FC, useEffect, useRef, ChangeEvent } from 'react'

interface IPasssingProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: any
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

        ulRef.current.style.display = 'flex'

        onInputChange(event)
      }
    )
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
