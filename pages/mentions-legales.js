import Home from "../components/Homepage/Home";
import Head from "next/head";
import LegalNotices from "../components/Legal/LegalNotices";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MentionLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales - Cash Genius</title>
        <meta name="description" content="Consultez nos mentions légales pour en savoir plus sur l’éditeur du site, les conditions d’utilisation, la protection des données et les droits applicables. Transparence et conformité assurées."/>
      </Head>
      <Header/>
      <main className=" font-sans">
      <LegalNotices />
      </main>
      <Footer/>
    </>
  );
}

export default MentionLegales;
