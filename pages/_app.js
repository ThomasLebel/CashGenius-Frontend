import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header/Header';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
