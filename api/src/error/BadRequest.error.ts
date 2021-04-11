import { BaseError } from './Base.error'

export class BadRequestError extends BaseError {
  statusCode = 400

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
