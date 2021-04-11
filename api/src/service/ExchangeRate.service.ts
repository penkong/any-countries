import { RESTDataSource } from 'apollo-datasource-rest'

export class ExchangeRate extends RESTDataSource {
  constructor() {
    super()
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://data.fixer.io/api/'
  }
}
