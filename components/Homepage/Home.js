import Header from "../Header/Header";
import HeroSection from "./HeroSection";
import StatsWithVideo from "./StatsWithVideo";


function Home() {

  return (
    <>
      <Header></Header>
      <main className="bg-backgroundColor h-screen font-sans">
        {/* Ecran principal de présentation */}
        <HeroSection />
        {/* Section Présentation Cash Genius */}
        <StatsWithVideo/>
      </main>
    </>
  );
}

export default Home;
