/*
 ** Description :
 */

import { createConnection } from 'typeorm'

import { app } from './app'
import { config } from './config'

// ---

const { PORT, DB_URL, JWT_KEY } = config

// ---

const bootstrap = async () => {
  if (!JWT_KEY) throw new Error('jwt key must be defined!')

  if (!DB_URL) throw new Error('database url must be defined!')

  try {
    await createConnection()
    app.listen(PORT, () => {
      console.log('Connected to Postgresql!!!')
      console.log(`Listening on ${PORT}!!!!!!!!`)
    })
  } catch (err) {
    console.error(err)
  }
}

bootstrap()
