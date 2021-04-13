import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.card

export const numCardSelector = createSelector(domainSelector, e => e.num)

export const lastAddSelector = createSelector(domainSelector, e => e.lastAdd)

export const cardSelector = createSelector(domainSelector, e => e.cards)
