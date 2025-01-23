import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TutorialsTitle from "../components/Tutorials/TutorialsTitle";
import TutorialVideos from "../components/Tutorials/TutorialVideos";
import RegistrationForm from '../components/Shared/RegistrationForm/RegistrationForm'


function Tutoriels() {
  return (
    <>
      <Header></Header>
      <main className=" font-sans">
        <TutorialsTitle/>
        <TutorialVideos/>
        <RegistrationForm/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Tutoriels;
