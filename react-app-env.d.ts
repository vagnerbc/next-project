declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    APP_NAME: string
    SODEXO_GATES: string
  }
}
