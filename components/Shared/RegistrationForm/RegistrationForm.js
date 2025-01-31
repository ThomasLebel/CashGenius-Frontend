import { useState, useEffect } from "react";
import Button from "../Button";


const RegistrationForm = ({referralCode = ""}) => {

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sponsorship, setSponsorship] = useState("");
  const [error, setError] = useState("");
  const [registred, setRegistred] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setSponsorship(referralCode)
  },[referralCode])
  
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phonePattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

  const handleSubmit = () => {
    if (!firstName || !lastname || !email || !phone) {
      setError("Veuillez remplir tous les champs obligatoires");
    } else if (!emailPattern.test(email)) {
      setError("Veuillez saisir une adresse email valide");
    } else if (!phonePattern.test(phone)) {
      setError("Veuillez saisir un numéro de téléphone valide");
    } else {
      setError("");
      const userToRegister = {
        firstname: firstName,
        lastname: lastname,
        email: email,
        phone: phone,
        sponsorship: sponsorship,
      };
      setLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/applicants/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToRegister),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === false) {
            setLoading(false)
            setError(data.error);
          } else {
            setRegistred(true)
            setLoading(false)
          }
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };


  return (
    <section id="inscription">
      <div className=" w-screen flex flex-col items-center py-20">
        <h2 className="font-bold text-sm md:text-base mb-5 text-secondaryColor text-center px-2 w-4/5">
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
          <h2 className="mt-5 font-bold text-xl lg:text-3xl z-10 text-center">
            {!registred ? "Je me lance !" : "Inscription prise en compte 🎉"}
          </h2>
          {!registred && <p className="text-secondaryColor font-light text-sm mt-2 text-center px-10 md:text-lg z-10">
            Remplis le formulaire de contact et notre
            <span className="font-bold"> Genius Coach</span> revient vers toi
            dans les 24h
          </p>}
          {registred && <p className="text-secondaryColor font-light text-sm mt-2 text-center px-10 py-16 md:text-lg z-10">
            Ton inscription a bien été effectuée, tu devrais recevoir un mail de confirmation dans les minutes qui viennent. <br/> <span className="font-medium">Si tu ne reçois rien, vérifie dans tes spams.</span>
          </p>}
          {!registred && <div className="mt-5 p-5 z-10 flex flex-col items-spaceBetween w-full">
            <div className="lg:flex ">
              <input
                type="text"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-input lg:mx-5"
              ></input>
              <input
                type="text"
                placeholder="Nom"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-input lg:mx-5"
              ></input>
            </div>
            <div className="lg:flex ">
              <input
                type="mail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-input lg:mx-5"
              ></input>
              <input
                type="tel"
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-input lg:mx-5"
              ></input>
            </div>
            <div className="lg:flex lg:items-center lg:justify-center">
              <input
                type="text"
                placeholder="Code parrainage (Facultatif)"
                value={sponsorship}
                onChange={(e) => setSponsorship(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-input lg:mx-5 lg:w-2/4"
              ></input>
            </div>
            {error && (
              <span className="text-red-700 text-center">⚠️ {error}</span>
            )}
          </div>}
          {!registred && <div className="mb-10 z-10" onClick={handleSubmit}>
            <Button name="Je m'inscris !" loading={loading}></Button>
          </div>}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
