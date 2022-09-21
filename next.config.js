const envPaths = new Map([
  ['development', '.env'],
  ['staging', '.env.stg'],
  ['production', '.env.prd'],
  ['test', '.env.test']
])

const { parsed: myEnv } = require('dotenv').config({
  path: envPaths.get(process.env.APP_NAME) || '.env'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: myEnv
}

module.exports = nextConfig
