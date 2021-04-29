/*
 ** Description :
 */

import { ValidationError } from 'express-validator'

import { BaseError } from './'

// ---

export class ValidationRequestErr extends BaseError {
  statusCode = 400

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters')

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, ValidationRequestErr.prototype)
  }

  serializeErrors() {
    return this.errors.map(err => ({ message: err.msg, field: err.param }))
  }
}
