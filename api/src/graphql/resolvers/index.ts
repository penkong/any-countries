/*
 ** Description :
 */

import { IResolvers } from 'graphql-tools'

// ---

export const resolvers: IResolvers = {
  Query: {
    getAllCountries: (_, __, { req, dataSources }) => {
      console.log(req.session)
      return dataSources.countryAPI.getAll()
    }
  }
}
