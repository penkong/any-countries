/*
 ** Description :
 */

import { Request, Response, NextFunction } from 'express'

import { catchAsync } from '../../utils'

// ---

export const logout = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    //

    req.session = null

    res.send({})
  }
)
