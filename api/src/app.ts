/*
 ** Description :
 */

import 'reflect-metadata'
import 'express-async-errors'

import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import cookieSession from 'cookie-session'

import { json } from 'body-parser'

import { config } from './config/'
import { authRouter } from './routes/'
import { NotFoundError } from './error'
import { errorHandler } from './middleware'

// ---

const { CORS } = config

const app = express()

// --------- Security Middlewares -----------

app.set('trust proxy', true)

app.use(json({ limit: '5kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(
  cookieSession({
    signed: false
    // secure: process.env.NODE_ENV !== 'test'
  })
)

app.use(helmet())

const limiter = rateLimit({
  max: 30,
  windowMs: 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
})

app.use('/api/*', limiter)
app.use('/grqphql', limiter)

// --------- Utility Middlewares -----------

app.use(
  cors({
    origin: CORS,
    credentials: true
  })
)

app.use(compression())

app.use('/api/v1/auth', authRouter)

// registration of graphql server
// const typeDefs = gql`
//   type Destination {
//     destination_id: String!
//     destination_name: String!
//   }
// `
// const resolvers = {}
// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: {}
// })

// apolloServer.applyMiddleware({
//   app,
//   cors: false
// })

// catch all routes
app.all('*', async (_req, _res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
