import Head from 'next/head'
import Navigation from '../components/Navigation'
import Container from 'react-bootstrap/Container'


import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Template App</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="A template app built on Nextjs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" href="/image/favicon-32x32.gif" />
        <link rel="icon" href="/image/favicon-32x32.gif" />
      </Head>
      <Navigation />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}