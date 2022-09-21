import { HomePage } from 'components/pages/home'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BackOffice</title>
        <meta name="description" content="BackOffice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  )
}

export default Home
