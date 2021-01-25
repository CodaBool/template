import Navigation from '../components/Navigation'
import NavBox from '../components/UI/NavBox'
import Container from 'react-bootstrap/Container'
import { Provider } from 'next-auth/client'
import Head from 'next/head'

import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Navigation />
        <Head>
          <title>Template Next App</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image" href="/icons/favicon-16x16.gif"/>
          <link rel="icon" type="image" href="/icons/favicon-32x32.gif"/>
        </Head>
        <Container>
          <Component {...pageProps} />
          <NavBox />
        </Container>
      </Provider>
    </>
  )
}
