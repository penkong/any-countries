/*
 ** Description :
 */

import { gql } from 'apollo-server-express'

// ---

export const typeDefs = gql`
  type Query {
    "a Query to get name of all countries "
    getAllCountries: [Country!]!
  }

  type Currency {
    code: String!
    name: String!
    symbol: String!
  }

  type Language {
    iso639_1: String!
    iso639_2: String!
    name: String!
    nativeName: String!
  }

  type Translations {
    de: String!
    es: String!
    fr: String!
    ja: String!
    it: String!
    br: String!
    nl: String!
    hr: String!
    fa: String!
  }

  type RegionalBloc {
    acronym: String!
    name: String!
    otherAcronyms: [String]
    otherNames: [String]
  }

  type Country {
    name: String!
    topLevelDomain: [String]!
    alpha2Code: String!
    alpha3Code: String!
    callingCodes: [String!]!
    captial: String!
    altSpellings: [String!]!
    region: String!
    subregion: String!
    population: Int!
    latlng: [Int!]!
    demonym: String!
    area: Int!
    gini: Float!
    timezones: [String!]!
    borders: [String!]!
    nativeName: String!
    numericCode: String!
    currencies: [Currency!]!
    languages: [Language!]!
    translations: Translations!
    flag: String!
    regionalBlocs: [RegionalBloc!]!
    cioc: String!
  }
`
