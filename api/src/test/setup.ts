import request from 'supertest'
// import { app } from '../app'

declare global {
  namespace NodeJS {
    interface Global {
      sampleFunc(): Promise<any>
    }
  }
}

beforeAll(async () => {})

beforeEach(async () => {})

afterAll(async () => {})

global.sampleFunc = async () => {}
