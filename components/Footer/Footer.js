import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="w-screen bg-[#0E1116] flex justify-center">
      <div className="p-10 text-white lg:flex lg:justify-between lg:w-4/5">
        <div className="lg:w-1/4 lg:mr-10">
          <div className="w-2/4">
            <Image src="/CashGeniusLogoWhite.png" alt="Logo Cash Genius" width={500} height={60} />
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
            <span className="underline underline-offset-4">Mention légales</span>
          </div>
          <div className="mt-3">
            <span className="underline underline-offset-4">
              Politique de confidentialité
            </span>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="mt-5 font-bold text-2xl lg:mt-0">Rejoignez-nous</h2>
          <div className="mt-5 flex flex-row">
            <a href="https://www.facebook.com/CashGenius38" target="_blank" aria-label="Visiter notre Facebook">
              <FontAwesomeIcon
                className="mr-5 hover:text-mainColor"
                icon={faFacebook}
                size="xl"
                color="white"
              ></FontAwesomeIcon>
            </a>

            <a href="https://www.instagram.com/cash_genius/" target="_blank" aria-label="Visiter notre Instagram">
              <FontAwesomeIcon
                className="mr-5  hover:text-mainColor"
                icon={faInstagram}
                size="xl"
                color="white"
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.youtube.com/c/CashGenius" target="_blank" aria-label="Visiter notre Youtube">
              <FontAwesomeIcon
                className="mr-5  hover:text-mainColor"
                icon={faYoutube}
                size="xl"
                color="white"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="mt-5 font-bold text-2xl lg:mt-0">Contact</h2>
          <div className="flex mt-5">
            <FontAwesomeIcon
              className="mr-5"
              icon={faEnvelope}
              size="xl"
              color="#f51465"
            ></FontAwesomeIcon>
            <a href="mailto:contact@cash-genius.com"><span className="hover:text-mainColor">contact@cash-genius.com </span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
