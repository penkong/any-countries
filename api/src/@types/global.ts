// @ts-ignore
import { Express } from 'express'

import { IUserPayload } from '.'

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload
    }
  }
}
