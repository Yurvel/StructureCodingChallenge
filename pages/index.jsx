import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header/Header'
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs'
import { Main } from '../components/Main/Main'
import { Footer } from '../components/Footer/Footer'

const Home = () => (
  <div>
    <Head>
      <title>structure challenge</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Header />
    <Breadcrumbs />
    <Main />
    <Footer />
  </div>
)

export default Home
