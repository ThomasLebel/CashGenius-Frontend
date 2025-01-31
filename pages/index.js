import Home from "../components/Homepage/Home"
import Head from "next/head";

function Index() {

  return (
    <>
      <Head>
        <title>Accueil - Cash Genius</title>
        <meta name="description" content="Participe gratuitement au Genius Programme qui permet d'optimiser les offres de bienvenue des bookmakers français."/>
        <meta name="keywords" content="cash genius, genius programme, programme genius, programme paris sportifs, bonus bookmakers"/>
      </Head>
      <Home />
    </>
  );
}

export default Index;
