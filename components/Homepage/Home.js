import Header from "../Header/Header";
import HeroSection from "./HeroSection";
import StatsWithVideo from "./StatsWithVideo";
import Steps from "./Steps";
import Reviews from "./Reviews";
import FAQSection from "./FAQSection";


function Home() {

  return (
    <>
      <Header></Header>
      <main className="bg-backgroundColor h-screen font-sans">
        {/* Ecran principal de présentation */}
        <HeroSection />
        {/* Section Présentation Cash Genius */}
        <StatsWithVideo/>
        <Steps/>
        <Reviews/>
        <FAQSection/>
      </main>
    </>
  );
}

export default Home;
