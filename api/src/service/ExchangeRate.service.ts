/*
 ** Description :
 */

import { RESTDataSource } from 'apollo-datasource-rest'

// import { config } from '../config/'

// ---

// const { FIXER_API_KEY } = config

export class ExchangeRate extends RESTDataSource {
  constructor() {
    super()
    // this.baseURL = `http://data.fixer.io/api/convert?access_key=${FIXER_API_KEY}`
    this.baseURL = `http://data.fixer.io/api/convert?access_key=e229b4cd628f9c28b2500762d245dbf5`
  }

  async getChangeRate(_from: string) {
    // this only need correct key to work.
    // const sl = await this.get(`&from=${from}&to=SEK&amount=1`)
    return 3
  }
}
