import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaste,
  faMousePointer,
  faFileSignature,
  faWallet,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import DashboardCard from "./DashboardCard";
import StatusChoiceButton from "./StatusChoiceButton";
import ApplicantCard from "./ApplicantCard";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { logout, refreshData } from "../../../reducers/user";

const DashboardSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user.value);

  const [statusChoice, setStatusChoice] = useState("Tout");
  const [codeCopied, setCodeCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {

    setIsClient(true);
    if (user && user.token) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/users/${user.token}`)
      .then(response => response.json())
      .then(data => {
        dispatch(refreshData(data))
      })
    }
  }, []);

  if (isClient && (!user || !user.token)) {
    router.push("/espace-affilie/login");
  }

  if (!user || !user.token) {
    return null;
  }

  // Compte le total de commissions
  let totalCommissions = 0;
  if (user.referredUsersInfos) {
    for (let referredUser of user.referredUsersInfos) {
      totalCommissions += referredUser.referredUserInfos.commission;
    }
  }

  // Liste les participants à afficher
  let applicantsSortedByDate = []
  if (user.referredUsersInfos.length > 0){
    applicantsSortedByDate = [...user.referredUsersInfos].sort((a, b) => {
      const dateA = new Date(a.referredUserInfos.createdAt);
      const dateB = new Date(b.referredUserInfos.createdAt);
      return dateB - dateA;
    });
  }

  const applicantsToShow = applicantsSortedByDate.map((e, i) => {
    const applicant = e.referredUserInfos;
    if (statusChoice === "Tout") {
      return (
        <ApplicantCard
          firstname={applicant.firstname}
          lastname={applicant.lastname}
          createdAt={applicant.createdAt}
          status={applicant.status}
        />
      );
    } else if (statusChoice === applicant.status) {
      return (
        <ApplicantCard
          firstname={applicant.firstname}
          lastname={applicant.lastname}
          createdAt={applicant.createdAt}
          status={applicant.status}
        />
      );
    }
  });

  // Changer le filtre de statut
  const handleClickStatusButton = (status) => {
    setStatusChoice(status);
  };

  // Copier le code dans le presse papier
  const copyCodeButton = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (err) {
      console.error("Échec de la copie :", err);
    }
  };

  // Copier le lien dans le presse papier
  const copyLinkButton = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error("Échec de la copie :", err);
    }
  };

  const disconect = () => {
    router.push("/espace-affilie/login");
    dispatch(logout());
  };

  return (
    <section className="pt-20 flex justify-center">
      <div className=" flex flex-col  mt-16 lg:w-2/4 w-3/4">
        <h1 className="font-bold text-2xl  md:text-4xl ">
          Welcome {user.firstname} 👋
        </h1>
        <p className="text-secondaryColor font-light text-sm mt-5 md:text-lg">
          Retrouve ici ton code et ton lien de parrainage, suis tes performances
          en un coup d'œil et découvre la liste de tes filleuls.
        </p>
        <div className="w-full flex justify-end">
          <span
            className="text-right text-red-600 underline underline-offset-4 mt-5 text-sm cursor-pointer"
            onClick={disconect}
          >
            Se déconnecter
          </span>
        </div>

        <h2 className="font-semibold text-lg mt-5">Code de parrainage</h2>
        <div className="w-full lg:w-80 h-12 mt-5 rounded-lg bg-white shadow-lg flex ">
          <div className="w-5/6 rounded-lg flex items-center justify-center">
            <input
              readOnly
              defaultValue={user.referralCode}
              className="w-full h-full rounded-lg ml-2 font-semibold text-sm text-secondaryColor p-2"
            ></input>
          </div>
          <div
            className="w-1/6 rounded-lg h-full flex justify-end items-center pr-3 cursor-pointer"
            onClick={() => copyCodeButton(user.referralCode)}
          >
            <FontAwesomeIcon
              icon={codeCopied ? faCheck : faPaste}
              color={"#ce0251"}
              size="lg"
            ></FontAwesomeIcon>
          </div>
        </div>
        <h2 className="font-semibold text-lg mt-5">Lien de parrainage</h2>
        <div className="w-full lg:w-80 h-12 mt-5 rounded-lg bg-white shadow-lg flex ">
          <div className="w-4/5 h-full rounded-lg flex items-center  justify-center">
            <input
              readOnly
              defaultValue={`https://cash-genius-frontend.vercel.app/${user.referralCode}#inscription`}
              className="w-full h-full rounded-lg ml-2 font-semibold text-sm text-secondaryColor underline p-2"
            ></input>
          </div>
          <div
            className="w-1/5 rounded-xl h-full flex justify-end items-center pr-3 cursor-pointer"
            onClick={() =>
              copyLinkButton(
                `https://cash-genius-frontend.vercel.app/${user.referralCode}#inscription`
              )
            }
          >
            <FontAwesomeIcon
              icon={linkCopied ? faCheck : faPaste}
              color={"#ce0251"}
              size="lg"
            ></FontAwesomeIcon>
          </div>
        </div>
        <h2 className="font-semibold text-lg mt-10 w-full text-center">
          Statistiques
        </h2>
        <div className="mt-5 w-full flex flex-wrap justify-center items-center">
          <DashboardCard
            icon={faMousePointer}
            title="Nombre de clics"
            value={user.referralClicks}
          />
          <DashboardCard
            icon={faFileSignature}
            title="Nombre d'inscriptions"
            value={user.referredUsersInfos.length}
          />
          <DashboardCard
            icon={faWallet}
            title="Commissions générées"
            value={`${totalCommissions}.00€`}
          />
        </div>
        <h2 className="font-semibold text-lg mt-5 w-full text-center">
          Filleuls
        </h2>
        <div className="mt-5 w-full flex flex-wrap justify-center">
          <StatusChoiceButton
            handleClickStatusButton={handleClickStatusButton}
            title="Tout"
            statusChoice={statusChoice}
          />
          <StatusChoiceButton
            handleClickStatusButton={handleClickStatusButton}
            title="En attente"
            statusChoice={statusChoice}
          />
          <StatusChoiceButton
            handleClickStatusButton={handleClickStatusButton}
            title="En cours"
            statusChoice={statusChoice}
          />
          <StatusChoiceButton
            handleClickStatusButton={handleClickStatusButton}
            title="Terminé"
            statusChoice={statusChoice}
          />
          <StatusChoiceButton
            handleClickStatusButton={handleClickStatusButton}
            title="Annulé"
            statusChoice={statusChoice}
          />
        </div>
        <div className="w-full h-full mt-5 mb-32">{applicantsToShow}</div>
      </div>
    </section>
  );
};

export default DashboardSection;
