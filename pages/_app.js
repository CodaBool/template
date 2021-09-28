import Head from 'next/head'
import Navigation from '../components/Navigation'
import Container from 'react-bootstrap/Container'

import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="site">
      <Head>
        <title>App</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Some App" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.gif" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.gif" />
        <link rel="apple-touch-icon" href="/image/favicon-32x32.gif" />
      </Head>
      <Navigation />
      <main className="site-content">
        <Container fluid={'md'} className="p-0">
          <Component {...pageProps} />
        </Container>
      </main>
      {/* <Footer /> */}
    </div>
  )
}