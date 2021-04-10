import express from 'express'

import { register, login, logout, currentUser } from '../controller/'

// ---

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/logout', logout)
router.get('/current-user', currentUser)

// ---

export { router as authRouter }
