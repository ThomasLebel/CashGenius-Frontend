import { Modal } from "antd";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const BonusModal = ({
  openModal,
  handleModal,
  name,
  title,
  amount,
  type,
  videoLink,
  registerLink,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Choix des étapes à afficher selon le genre de bonus

  let stepsToShow = <></>;

  switch (title) {
    case "Rembourse le 1er pari perdant":
      stepsToShow = (
        <>
          <li className="pb-2">Effectuer un 1er pari (simple ou combiné)</li>
          <li className="pb-2">
            Si le pari est perdant, lorsque vos documents seront validés, vous
            recevrez le montant de votre mise jusqu'à {amount}€
          </li>
        </>
      );
      break;
    case "Rembourse le 1er pari qu'il soit gagnant ou perdant":
      stepsToShow = (
        <>
          <li className="pb-2">Effectuer un 1er pari (simple ou combiné)</li>
          <li className="pb-2">
            Peu importe le résultat de votre pari, qu'il soit gagnant ou
            perdant, lorsque vos documents seront validés, vous recevrez le
            montant de votre mise jusqu'à {amount}€
          </li>
        </>
      );
      break;
    case "Double le montant du 1er dépôt":
      stepsToShow = (
        <>
          <li className="pb-2">
            Lorsque votre dépôt sera validé, vous serez automatiquement crédité
            du montant de votre dépôt jusqu'à {amount}€ sous forme de freebets
            en plus du montant de votre dépôt en argent réel
          </li>
        </>
      );
      break;
    case "Rembourse le 1er pari live perdant":
      stepsToShow = (
        <>
          <li className="pb-2">Effectuer un 1er pari (en Live)</li>
          <li className="pb-2">
            Si le pari est perdant, lorsque votre compte sera validé, lorsque
            vos documents seront validés, vous recevrez le montant de votre mise
            jusqu'à {amount}€
          </li>
        </>
      );
      break;
  }

  // Choix de la description à afficher selon le type de bonus

  let bonusDescription = <></>;

  switch (type) {
    case "FREEBETS":
      bonusDescription = (
        <>
          <p className="pt-2">
            Sur ce site, le bonus reçu est sous forme de freebets (ou paris
            gratuit). Le montant crédité n'est donc pas directement retirable,
            il est nécessaire de le miser pour pouvoir retirer les gains.
          </p>
          <p className="pt-2">
            Lorsqu'un pari est effectué en freebets, c'est un gain net{" "}
            <span className="font-semibold">( mise x côte - mise)</span>
          </p>
          <p className="pt-2">
            <span className="underline">Exemple</span> :{" "}
            <span className="font-semibold">
              50€ de freebets sur une côte de 3.00 = 50€ x 3.00 - 50€ = 100€ de
              gain net retirable
            </span>
          </p>
        </>
      );
      break;
    case "CASH":
      bonusDescription = (
        <>
          <p className="pt-2">
            Sur ce site, le bonus reçu est en{" "}
            <span className="font-bold">cash</span>. Le montant crédité est donc
            directement retirable sur le compte bancaire, il n'est pas
            nécessaire de misé la somme reçue.
          </p>
        </>
      );
      break;
    case "BONUS À REMISER":
      bonusDescription = (
        <>
          <p className="pt-2">
            Sur ce site, le bonus reçu est à remiser 3 fois au total avant de
            pouvoir effectuer un retrait des gains vers son compte bancaire.
          </p>
          <p className="pt-2">
            Lorsqu'un pari est effectué en freebets, c'est un gain net{" "}
            <span className="font-semibold">( mise x côte - mise)</span>
          </p>
          <p className="pt-2">
            <span className="underline">Exemple</span> :{" "}
            <span className="font-semibold">
              Pour 100€ de bonus reçus, il est nécessaire de miser 300€ au total
              sur des paris avec une côte supérieure à 2.00 avant de pouvoir
              retirer les gains.
            </span>
          </p>
        </>
      );
      break;
  }

  return (
    <Modal
      className="font-sans mt-16"
      footer={null}
      title={`BONUS ${name}`}
      centered
      open={openModal}
      onCancel={handleModal}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      {videoLink && (
        <h1 className="font-bold text-xl md:text-2xl">Vidéo présentation</h1>
      )}
      <div>
        {videoLink && (
          <div
            className="mt-5 relative w-full "
            style={{ paddingBottom: "56.25%" }}
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              url={videoLink}
              light={`/miniatures/${
                name === "PARIONS SPORT" ? "PARIONSSPORT" : name
              }.webp`}
              controls={true}
            />
          </div>
        )}
        <h1 className="font-bold text-xl md:text-2xl mt-5">
          Comment obtenir le bonus ?
        </h1>
        <ul className="list-disc pl-5 mt-3">
          <li className="pb-2">S'inscrire sur le site</li>
          <li className="pb-2">
            Envoyer l'ensemble des documents justificatifs (Pièce d'identité,
            justificatif de domicile, RIB)
          </li>
          <li className="pb-2">Effectuer un dépôt sur le compte</li>
          {stepsToShow}
        </ul>
        <h1 className="font-bold text-xl md:text-2xl mt-5">
          Comment récupérer le bonus ?
        </h1>
        {bonusDescription}
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={handleModal}
            className=" bg-white hover:bg-gray-200 text-mainColor border-2 border-mainColor font-sans font-normal text-sm p-2 rounded-md mx-2"
          >
            Fermer
          </button>
          <button
            onClick={() => window.open(registerLink, "_blank")}
            className=" bg-[#ce0251] hover:bg-[#ac054a] text-white font-sans font-normal text-sm p-2 rounded-md mx-2"
          >
            Profite du bonus
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BonusModal;
