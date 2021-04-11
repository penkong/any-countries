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
  createdAt
}: User) => ({
  id,
  email,
  confirmed,
  type,
  createdAt
})
