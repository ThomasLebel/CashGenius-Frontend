import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ComparatorTitle from "../components/BonusComparator/ComparatorTitle";
import BonusComparator from "../components/BonusComparator/BonusComparator";
import RegistrationForm from "../components/Shared/RegistrationForm/RegistrationForm"
import Head from "next/head";

function Comparator() {
  return (
    <>
      <Head>
        <title>Comparateur de bonus - Cash Genius</title>
        <meta name="description" content="Découvrez les meilleurs bonus offerts par les bookmakers en France. Comparez les offres de bienvenue, les promotions et les avantages exclusifs pour maximiser vos gains sur vos paris sportifs."/>
        <meta name="keywords" content="bonus bookmakers France, meilleurs bonus paris sportifs, offre de bienvenue bookmakers, code promo paris sportifs, promotions paris sportifs"/>
      </Head>
      <Header></Header>
      <main className=" font-sans">
        <ComparatorTitle />
        <BonusComparator/>
        <RegistrationForm/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Comparator;
