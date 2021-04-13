/*
 ** Description :
 */

import { IResolvers } from 'graphql-tools'

// ---

export const resolvers: IResolvers = {
  Query: {
    getAllCountries: (_, __, { dataSources }) => {
      // console.log(req.session)
      // security things if we want to handle for future .
      return dataSources.countryAPI.getAll()
    },

    getCountry: (_, { term }, { dataSources }) => {
      return dataSources.countryAPI.getOne(term)
    }
  },
  Currency: {
    changeRateToSEK: ({ code }, _, { dataSources }) => {
      // console.log(code) , code is country abbriviate money
      return dataSources.changeRateAPI.getChangeRate(code)
    }
  }
}
