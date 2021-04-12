import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.auth

export const isThisLizzOrSomthingLikeThis = createSelector(
  domainSelector,
  e => e.isAuthenticated
)
