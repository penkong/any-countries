import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.card

export const numCardSelector = createSelector(domainSelector, e => e)
