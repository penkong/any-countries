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
    },

    getCountry: (_, { term }, { dataSources }) => {
      return dataSources.countryAPI.getOne(term)
    }
  },
  Currency: {
    changeRateToSEK: ({ code }, _, { dataSources }) => {
      console.log(code)
      return dataSources.changeRateAPI.getChangeRate(code)
    }
  }
}
