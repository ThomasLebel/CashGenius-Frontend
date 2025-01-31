import Button from "../../Shared/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../../../reducers/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(state => state.user.value)

  useEffect(()=>{
    if (user && user.token){
      router.push("/espace-affilie/dashboard")
    }
  },[])

  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
    } else if (!emailPattern.test(email)) {
      setError("Veuillez saisir une adresse email valide");
    } else {
      setError("");
      const credentials = {
        email,
        password,
      };
      setIsLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.result === false){
            setError(data.error)
            setIsLoading(false)
          } else {
            setError("")
            dispatch(login(data.userInfos))
            router.push('/espace-affilie/dashboard')
            setIsLoading(false)
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
    <section className="pt-12 flex justify-center ">
      <div className=" flex flex-col items-center lg:w-2/4 w-3/4">
        <div className=" p-10 bg-white shadow-xl rounded-xl max-w-96 mb-28">
          <h2 className="font-bold text-xl text-mainColor w-full text-center">
            CONNEXION
          </h2>
          <p className="text-sm font-light text-secondaryColor mt-2 w-full text-center">
            Pas encore de compte ?{" "}
            <Link href="/espace-affilie/signup">
              <span className="underline cursor-pointer">Créer un compte</span>
            </Link>
          </p>
          <h3 className="mt-7">Email</h3>
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
          <div className="w-full text-center mt-10" onClick={handleSubmit}>
            <Button name="CONNEXION" loading={isLoading}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
