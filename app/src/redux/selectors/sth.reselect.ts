import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.sth

export const sthSelector = createSelector(domainSelector, thing => thing)
