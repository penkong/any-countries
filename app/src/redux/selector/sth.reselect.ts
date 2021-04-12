import { createSelector } from 'reselect'

// ---

import { RootState } from '..'

// ---

const domainSelector = (state: RootState) => state.auth

export const isAuthenticatedSelector = createSelector(
  domainSelector,
  e => e.isAuthenticated
)
