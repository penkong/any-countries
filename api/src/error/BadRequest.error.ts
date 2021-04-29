/*
 ** Description :
 */

import { BaseError } from './Base.error'

// ---

export class BadRequestError extends BaseError {
  statusCode = 400

  constructor(public message: string) {
    super(message || 'bad request')

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
