/*
 ** Description :
 */

import 'reflect-metadata'

import cors from 'cors'
import express from 'express'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { ApolloServer } from 'apollo-server-express'

import { NotFoundError } from './error'
import { errorHandler } from './middleware'
import { authRouter } from './routes/'

// ---

const app = express()

app.set('trust proxy', true)
app.use(json())

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
)

const apolloServer = new ApolloServer({
  // schema: await buildSchema({
  //   // resolvers: [],
  //   validate: false
  // }),
  context: {}
  // dataSources() {}
})

apolloServer.applyMiddleware({
  app,
  cors: false
})

app.use('/api/v1', authRouter)

app.all('*', async (_req, _res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
