import { useState } from "react";
import Button from "../Button";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sponsorship, setSponsorship] = useState("");

  return (
    <section>
      <div className="h-screen w-screen flex flex-col items-center pt-20">
        <h2 className="font-bold text-sm md:text-base mb-2 text-secondaryColor text-center px-2">
          Programme de 4 à 5 semaines GRATUIT et valable une fois par personne.
        </h2>

        <h1 className="font-bold text-2xl md:text-4xl text-center ">
          🔥 RÉCOLTE TES BONUS DÈS MAINTENANT 🔥
        </h1>
        <div className="mt-10 w-5/6 lg:w-3/6 xl:w-2/6 rounded-xl shadow-lg bg-white flex flex-col items-center relative">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-auto opacity-60 z-0"
            style={{
              backgroundImage: "url(/bg-world.png)",
            }}
          ></div>
          <h2 className="mt-5 font-bold text-xl lg:text-3xl z-10">
            Je me lance !
          </h2>
          <p className="text-secondaryColor font-light text-sm mt-2 text-center px-10 md:text-lg z-10">
            {" "}
            Remplis le formulaire de contact et notre
            <span className="font-bold"> Genius Coach</span> revient vers toi
            dans les 24h
          </p>
          <div className="mt-5 p-5 z-10 flex flex-col items-spaceBetween w-full">
            <div className="lg:flex ">
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input lg:mx-5"
            ></input>
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input lg:mx-5"
            ></input>
            </div>
            <div className="lg:flex ">
            <input
              type="mail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input lg:mx-5"
            ></input>
            <input
              type="tel"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input lg:mx-5"
            ></input>
            </div>
            <div className="lg:flex lg:items-center lg:justify-center">
            <input
              type="text"
              placeholder="Code parrainage (Facultatif)"
              value={sponsorship}
              onChange={(e) => setSponsorship(e.target.value)}
              className="form-input lg:mx-5 lg:w-2/4"
            ></input>
            </div>
          </div>
          <div className="mb-10 z-10">
            <Button name="Je m'inscris !"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
