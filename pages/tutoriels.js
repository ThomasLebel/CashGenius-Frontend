import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TutorialsTitle from "../components/Tutorials/TutorialsTitle";
import TutorialVideos from "../components/Tutorials/TutorialVideos";
import RegistrationForm from "../components/Shared/RegistrationForm/RegistrationForm";
import Head from "next/head";

function Tutoriels() {
  return (
    <>
      <Head>
        <title>Les tutos - Cash Genius</title>
        <meta
          name="description"
          content="Découvrez toutes les vidéos tutorielles pour vous guider étape par étape dans l'inscription aux bookmakers en ligne. Apprenez comment créer votre compte facilement et profiter des meilleures offres de bienvenue."
        />
        <meta
          name="keywords"
          content="tuto bookmakers France, tuto bonus paris sportifs, tuto inscription bookmakers, guide inscription paris sportifs, tuto vidéo bookmaker France"
        />
      </Head>
      <Header></Header>
      <main className=" font-sans">
        <TutorialsTitle />
        <TutorialVideos />
        <RegistrationForm />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Tutoriels;
