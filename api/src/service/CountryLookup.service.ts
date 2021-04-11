import { RESTDataSource } from 'apollo-datasource-rest'

export class CountryLookup extends RESTDataSource {
  constructor() {
    super()
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://restcountries.eu/rest/v2/'
  }
}
