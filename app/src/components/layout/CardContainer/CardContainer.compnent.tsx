import React from 'react'
import { useSelector } from 'react-redux'

import { CardCustom } from '@components'
import { useGetCountriesWithFlag } from '@hooks'
import { lastAddSelector, numCardSelector } from '@redux'
import { useEffect } from 'react'

export const CardContainer = () => {
  const numCard = useSelector(numCardSelector)

  useEffect(() => {}, [numCard])

  const renderIt = () => {
    const sl = []
    for (let i = 0; i < numCard; i++) {
      sl.push(<CardCustom key={i} />)
    }
    return sl
  }

  return (
    <div id="container" className="m-auto">
      <div
        className="flex flex-row flex-wrap sm:flex-row mx-auto rounded-md bg-gray-200 "
        style={{ minHeight: '70vh', maxWidth: '80vw' }}
      >
        {renderIt() || ''}
      </div>
    </div>
  )
}
