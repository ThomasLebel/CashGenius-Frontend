import Header from "../Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import StatsWithVideo from "./StatsWithVideoSection/StatsWithVideo";
import Steps from "./StepsSection/Steps";
import Reviews from "./ReviewsSection/Reviews";
import FAQ from "./FAQSection/FAQ";
import RegistrationForm from "../Shared/RegistrationForm/RegistrationForm";
import Footer from "../Footer/Footer";


const Home = ({referralCode = ""}) => {

  return (
    <>
      <Header></Header>
      <main className=" font-sans">
        {/* Ecran principal de présentation */}
        <HeroSection />
        {/* Section Présentation Cash Genius */}
        <StatsWithVideo/>
        <Steps/>
        <Reviews/>
        <FAQ/>
        <RegistrationForm referralCode={referralCode}/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
