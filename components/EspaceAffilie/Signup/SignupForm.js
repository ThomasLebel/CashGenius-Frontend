import Button from "../../Shared/Button";
import Link from "next/link";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../../reducers/user";
import { useRouter } from "next/router";

const SignupForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter();

  const userInfos = useSelector((state) => state.user.value)

  console.log(userInfos)

  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const HandleSubmit = () => {
    if (!firstname || !lastname || !email || !password) {
      setError("Veuillez remplir tous les champs obligatoires");
    } else if (!emailPattern.test(email)) {
      setError("Veuillez saisir une adresse email valide");
    } else if (password.length < 8) {
      setError("Veuillez saisir un mot de passe de plus de 8 caractères");
    } else {
      setError("")
      const newUser = {
        firstname,
        lastname,
        email,
        password,
      };
      setIsLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.result === false){
            setError(data.error)
            setIsLoading(false)
          } else {
            setError("")
            dispatch(login(data.userInfos))
            router.push("/espace-affilie/dashboard")
            setIsLoading(false)
          }
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      HandleSubmit();
    }
  };

  return (
    <section className="pt-12 flex justify-center">
      <div className=" flex flex-col items-center lg:w-2/4 w-3/4">
        <div className=" p-10 bg-white shadow-xl rounded-xl max-w-96 mb-28">
          <h2 className="font-bold text-xl text-mainColor w-full text-center">
            INSCRIPTION
          </h2>
          <p className="text-sm font-light text-secondaryColor mt-2 w-full text-center">
            Vous avez déjà un compte ?{" "}
            <Link href="/espace-affilie/login">
              <span className="underline cursor-pointer">Se connecter</span>
            </Link>
          </p>
          <h3 className="mt-7">Prénom</h3>
          <input
            className="border focus:border-mainColor focus:outline-none rounded-md mt-1 text-sm p-2 w-full"
            placeholder="Tapez votre prénom"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <h3 className="mt-5">Nom</h3>
          <input
            className="border focus:border-mainColor focus:outline-none rounded-md mt-1 text-sm p-2 w-full"
            placeholder="Tapez votre nom"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <h3 className="mt-5">Email</h3>
          <input
            className="border focus:border-mainColor focus:outline-none rounded-md mt-1 text-sm p-2 w-full"
            placeholder="Tapez votre email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <h3 className="mt-5">Mot de passe</h3>
          <input
            className="border focus:border-mainColor focus:outline-none rounded-md mt-1 text-sm p-2 w-full"
            placeholder="Tapez votre mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          {error && (
            <p className="text-red-700 pt-5 w-full text-center text-sm">
              {error}
            </p>
          )}
          <div className="w-full text-center mt-10" onClick={HandleSubmit}>
            <Button name="INSCRIPTION" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
