/*
 ** Description :
 */

import 'reflect-metadata'
import 'express-async-errors'

//
const express = require('express')

import cors from 'cors'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import cookieSession from 'cookie-session'

import { json } from 'body-parser'
import { ApolloServer } from 'apollo-server-express'

import { config } from './config'
import { authRouter } from './routes/'
import { NotFoundError } from './error'
import { CountryLookup } from './service/'
import { createConnection } from 'typeorm'
import { errorHandler } from './middleware'
import { UserRepository } from './data-layer/'
import { typeDefs, resolvers } from './graphql'

// ---

const { DB_URL, JWT_KEY, CORS, PORT } = config

// ---

import { Request, Response } from 'express'
import helmet from 'helmet'
import { currentUser } from './middleware/currentUser.middleware'

async function startApolloServer() {
  //

  if (!JWT_KEY) throw new Error('jwt key must be defined!')

  if (!DB_URL) throw new Error('database url must be defined!')

  // DB connection
  await createConnection()

  const app = express()

  app.set('trust proxy', true)

  app.use(json({ limit: '2kb' }))
  app.use(express.urlencoded({ extended: true, limit: '2kb' }))
  app.use(
    cookieSession({
      signed: false
      // secure: process.env.NODE_ENV !== 'test'
    })
  )

  app.all('*', currentUser)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, UserRepository }),
    dataSources: () => {
      return {
        countryAPI: new CountryLookup()
      }
    }
  })

  await server.start()

  // --------- Utility and Security Middlewares -----------

  const limiter = rateLimit({
    max: 30,
    windowMs: 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
  })

  app.use('/api/*', limiter)
  app.use('/grqphql', limiter)

  app.use(
    cors({
      origin: CORS,
      credentials: true
    })
  )

  app.use(compression())

  // --------- Businesses --------------------

  app.use('/api/v1/auth', authRouter)

  server.applyMiddleware({ app })

  await new Promise(resolve => app.listen({ port: PORT }, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )

  // -------- More Middlewares ---------------

  app.use(helmet())

  // catch all routes
  app.all('*', async (_req: Request, _res: Response) => {
    throw new NotFoundError()
  })

  app.use(errorHandler)

  return { server, app }
}

startApolloServer()
