import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { config } from '../config/'
import { IUserPayload } from '../@types'

// ---

const { JWT_KEY } = config

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload
    }
  }
}

// ---

export const currentUser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  //
  if (!req.session?.jwt) return next()

  try {
    const payload = jwt.verify(req.session.jwt, JWT_KEY!) as IUserPayload
    req.currentUser = payload
  } catch (err) {}

  next()
}
