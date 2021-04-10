import { Request, Response, NextFunction } from 'express'

import { catchAsync } from '../../utils'

// ---

export const login = catchAsync(
  async (_req: Request, _res: Response, _next: NextFunction) => {}
)
