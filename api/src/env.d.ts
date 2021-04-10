declare namespace NodeJS {
  export interface ProcessEnv {
    DB_URL: string
    PORT: string
    SESSION_SEC: string
    CORS: string
  }
}
