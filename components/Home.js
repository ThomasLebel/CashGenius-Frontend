import styles from "../styles/Home.module.css";
import Image from "next/image";
import Button from "./Button";

function Home() {
  return (
    <div>
      <main className="bg-backgroundColor h-screen">
        <div
          className=" flex flex-col justify-center h-4/5 w-screen relative" 
          style={{ 
            backgroundImage: `url(/background_image.webp)`,
            backgroundPosition: 'right 40% bottom 40%',
            backgroundSize:'cover'
          }}
        >
          <div className="w-4/5 ml-10 lg:ml-20 md:w-2/6">
            <h2 className='font-sans font-bold text-base text-white mb-4'>COMME PIERRE</h2>
            <h1 className='font-sans font-bold text-3xl lg:text-5xl text-white'>
              Gagne jusqu'à 400€ grâce aux bonus des plus grands sites de paris
              sportifs.
            </h1>
            <Button name="JE M'INSCRIS AU GENIUS PROGRAMME"></Button>
            <div 
            className="absolute -bottom-2 left-0 min-h-[80px] w-screen"
            style={{ 
              backgroundImage: `url(/wave.png)`,
              backgroundPosition: 'center',
              backgroundSize:'cover'
            }}
            >
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Home;
