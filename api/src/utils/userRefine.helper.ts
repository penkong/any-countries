/*
 ** Description :
 */

import { User } from '../data-layer/'

// ---

export const userRefine = ({
  id,
  email,
  confirmed,
  type,
  updatedAt
}: User) => ({
  id,
  email,
  confirmed,
  type,
  updatedAt
})
