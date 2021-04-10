/*
 ** Description :
 */

// import { ApolloServer, gql } from 'apollo-server-express'
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
      synchronize: true,
      migrations: [path.join(__dirname, './data/migrations/*')],
      entities: []
    })

    console.log('Connected to Postgresql!!!')
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

    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}!!!!!!!!`)
    })
  } catch (err) {
    console.error(err)
  }
}

bootstrap()

// app.get('/api', (req, res) => {
//   res.json({
//     message: 'Welcome to the API'
//   });
// });

// app.post('/api/posts', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if(err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created...',
//         authData
//       });
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   // Mock user
//   const user = {
//     id: 1,
//     username: 'brad',
//     email: 'brad@gmail.com'
//   }

//   jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//     res.json({
//       token
//     });
//   });
// });

// // FORMAT OF TOKEN
// // Authorization: Bearer <access_token>

// // Verify Token
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers['authorization'];
//   // Check if bearer is undefined
//   if(typeof bearerHeader !== 'undefined') {
//     // Split at the space
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }

// }
