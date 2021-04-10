/*
 ** Description :
 */

import { ApolloServer, gql } from 'apollo-server-express'
import path from 'path'
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
    await createConnection({
      type: 'postgres',
      url: DB_URL,
      logging: true,
      // synchronize: true,
      migrations: [path.join(__dirname, './data/migrations/*')],
      entities: []
    })

    console.log('Connected to Postgresql!!!')
    // registration of graphql server
    const typeDefs = gql`
      type Destination {
        destination_id: String!
        destination_name: String!
      }
    `
    const resolvers = {}
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: {}
    })

    apolloServer.applyMiddleware({
      app,
      cors: false
    })

    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}!!!!!!!!`)
    })
  } catch (err) {
    console.error(err)
  }
}

bootstrap()
