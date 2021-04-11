/*
 ** Description :
 */

import { IResolvers } from 'graphql-tools'

// ---

export const resolvers: IResolvers = {
  Query: {
    getAllCountries: (_, __, { dataSources }) => {
      return dataSources.countryAPI.getAll()
    }
  }
}
