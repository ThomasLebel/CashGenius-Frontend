import Home from "../components/Homepage/Home";
import Head from "next/head";
import PrivacyPolicy from "../components/Legal/PrivacyPolicy";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Mentions légales - Cash Genius</title>
        <meta name="description" content="Consultez nos mentions légales pour en savoir plus sur l’éditeur du site, les conditions d’utilisation, la protection des données et les droits applicables. Transparence et conformité assurées."/>
      </Head>
      <Header/>
      <main className=" font-sans">
      <PrivacyPolicy/>
      </main>
      <Footer/>
    </>
  );
}

export default PolitiqueConfidentialite;
