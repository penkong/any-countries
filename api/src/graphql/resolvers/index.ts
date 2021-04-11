/*
 ** Description :
 */

import { IResolvers } from 'graphql-tools'

// ---

export const resolvers: IResolvers = {
  Query: {
    getAllCountries: (_, __, { dataSources }) => {
      // console.log(req.session)
      return dataSources.countryAPI.getAll()
    }
  },
  Currency: {
    changeRateToSEK: ({ code }, __) => {
      console.log(code)
      return 3
    }
  }
}
