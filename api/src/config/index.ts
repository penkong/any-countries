require('dotenv-safe').config()

export const config = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  __prod__: process.env.NODE_ENV === 'production'
}
