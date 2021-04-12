import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.card

export const cardSelector = createSelector(domainSelector, e => e)
