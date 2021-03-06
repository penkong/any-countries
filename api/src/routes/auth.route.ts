/*
 ** Description :
 */

import express from 'express'
import { body } from 'express-validator'

import { validateReq } from '../middleware'
import { register, login, logout, getUser } from '../controller/'

// ---

const router = express.Router()

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 30 characters')
  ],
  validateReq,
  register
)

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 30 characters')
  ],
  validateReq,
  login
)

router.get('/logout', logout)

router.get('/current-user', getUser)

// ---

export { router as authRouter }
