import { Middleware } from 'redux'

// ---

export const someMiddleware = () => {
  return (store => next => action => {
    next(action)
  }) as Middleware
}
