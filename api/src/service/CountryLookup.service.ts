/*
 ** Description :
 */

import { RESTDataSource } from 'apollo-datasource-rest'

// ---

export class CountryLookup extends RESTDataSource {
  constructor() {
    super()
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://restcountries.eu/rest/v2/'
  }

  getAll() {
    return this.get('all')
  }

  getOne(term: string) {
    return this.get(`name/${term}`)
  }
}
