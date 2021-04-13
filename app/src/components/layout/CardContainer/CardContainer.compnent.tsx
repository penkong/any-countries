import { useEffect } from 'react'

import { CardCustom } from '@components'
import { useGetCountriesWithFlag } from '@hooks'
import { cardSelector, lastAddSelector } from '@redux'
import { IAddCardSuccessResponse } from '@redux/action-interfaces'
import { useTypedSelector } from '../../../hooks/'

export const CardContainer = () => {
  const term = useTypedSelector(lastAddSelector)
  const [name, cardError, cardLoading] = useGetCountriesWithFlag(term)

  const cards = useTypedSelector(cardSelector)
  useEffect(() => {}, [term, Object.keys(cards)])

  const checker = (el: any, s: any) =>
    (cards[el] as IAddCardSuccessResponse).name === name ? s : false

  const renderIt = () =>
    Object.keys(cards).map(el => (
      <CardCustom
        cardError={checker(el, cardError)}
        cardLoading={checker(el, cardLoading)}
        key={el}
        country={cards[el]}
      />
    ))

  return (
    <div id="container" className="m-auto">
      <div
        className="flex mt-20 flex-row flex-wrap sm:flex-row mx-auto rounded-md bg-gray-200 "
        style={{ minHeight: '70vh', maxWidth: '80vw' }}
      >
        {renderIt() || ''}
      </div>
    </div>
  )
}
