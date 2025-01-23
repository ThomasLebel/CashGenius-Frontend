import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope  } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="w-screen bg-[#0E1116] flex justify-center">
      <div className="p-10 text-white lg:flex lg:justify-between lg:w-4/5">
        <div className="lg:w-1/4 lg:mr-10">
        <div className="w-2/4">
          <Image src="/CashGeniusLogoWhite.png" width={500} height={60} />
        </div>
        <p className="mt-5">
          <span className="font-bold">Cash Genius 400€</span> - Programme
          GRATUIT - Gagne jusqu'à 400€ grâce aux bonus des plus grand sites de
          paris sportifs
        </p>
        <p className="mt-5 font-light">© Réalisation Thomas LEBEL</p>
        </div>
        <div className="lg:w-1/4">
        <h2 className="mt-5 font-bold text-2xl lg:mt-0">Liens Rapide</h2>
        <div className="mt-5">
          <a className="underline underline-offset-4">Mention légales</a>
        </div>
        <div className="mt-3">
          <a className="underline underline-offset-4">Politique de confidentialité</a>
        </div>
        </div>
        <div className="lg:w-1/4">
        <h2 className="mt-5 font-bold text-2xl lg:mt-0">Rejoignez-nous</h2>
        <div className="mt-5 flex flex-row">
            <FontAwesomeIcon className="mr-5" icon={faFacebook} size="xl" color="white"></FontAwesomeIcon>
            <FontAwesomeIcon className="mr-5" icon={faInstagram} size="xl" color="white"></FontAwesomeIcon>
            <FontAwesomeIcon className="mr-5" icon={faYoutube} size="xl" color="white"></FontAwesomeIcon>
        </div>
        </div>
        <div className="lg:w-1/4">
        <h2 className="mt-5 font-bold text-2xl lg:mt-0">Contact</h2>
        <div className="flex mt-5">
        <FontAwesomeIcon className="mr-5" icon={faPhoneAlt} size="xl" color="#f51465"></FontAwesomeIcon>
        <span>07 69 36 42 64 </span>
        </div>
        <div className="flex mt-5">
        <FontAwesomeIcon className="mr-5" icon={faEnvelope} size="xl" color="#f51465"></FontAwesomeIcon>
        <span>contact@cash-genius.com </span>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
