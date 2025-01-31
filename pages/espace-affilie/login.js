import Home from "../../components/Homepage/Home"
import Head from "next/head";
import Header from "../../components/Header/Header";
import LoginTitle from "../../components/EspaceAffilie/Login/LoginTitle";
import LoginForm from "../../components/EspaceAffilie/Login/LoginForm";
import Footer from "../../components/Footer/Footer";

function EspaceAffilieLogin() {

  return (
    <>
      <Head>
        <title>Espace Affilié - Cash Genius</title>
        <meta name="description" content="Rejoignez notre programme d'affiliation et commencez à gagner des commissions en recommandant le Genius Programme à vos proches."/>
        <meta name="keywords" content="cash genius parrainage, genius programme parrainage, cash genius affiliation, genius programme affiliation"/>
      </Head>
      <Header/>
      <main className=" font-sans">
        <LoginTitle/>
        <LoginForm/>
      </main>
      <Footer/>
    </>
  );
}

export default EspaceAffilieLogin;
