/*
 ** Description :
 */

import { User } from '../data-layer/'

// ---

export const userRefine = (
  { id, email, confirmed, type, updatedAt }: User,
  token: string
) => ({
  id,
  email,
  confirmed,
  type,
  updatedAt,
  token
})
