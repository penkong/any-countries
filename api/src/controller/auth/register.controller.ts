import { Request, Response, NextFunction } from 'express'

import { catchAsync } from '../../utils'

// ---

export const register = catchAsync(
  async (_req: Request, _res: Response, _next: NextFunction) => {}
)
