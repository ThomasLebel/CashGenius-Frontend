import Button from "../../Shared/Button";
import StepItem from "./StepItem";


const Steps = () => {
  return (
    <section className="bg-backgroundColor pt-20 flex flex-col justify-center items-center">
      <div className="w-3/4">
        <h1 className="font-bold text-2xl text-center md:text-4xl ">
          NOTRE MÉTHODE EN 3 ÉTAPES 🤝
        </h1>
      </div>
      <div className=" mt-5 w-5/6 flex flex-col items lg:flex-row lg:justify-around lg:w-5/6 xl:w-4/6">
        <StepItem
          number="01"
          title="LANCEMENT DU PROGRAMME"
          description="La première étape est de s'inscrire et déposer 175€ répartis sur 3 sites
        de paris en ligne. Le Genius Coach te guide ensuite pour placer ton 1er
        pari sur tous les résultats d'un match, une fois le résultat connu, tu
        récupères tes gains sur le site gagnant et les bonus des deux sites
        perdants"
        />
        <StepItem
          number="02"
          title="RÉCUPÉRATION DES BONUS"
          description="C'est en rejouant les différents bonus reçus qu'il est possible de faire du bénéfice sans prendre de risque. Le coach t'accompagne du début à la fin avec un suivi personnalisé par mail, il t'indique sur quels sites t'inscrire, les paris à prendre et comment récupérer les bonus."
        />
        <StepItem
          number="03"
          title="CALCUL DU BÉNÉFICE GAGNÉ"
          description="Après 4 à 6 semaines de parcours entre les sites t'ayant demandé 30 minutes par semaine pour pouvoir effectuer les étapes, tous les bonus ont été obtenus, transformés en cash et le programme est terminé. Tu récupères tes 175€ + 300/400€ de bénéfices."
        />
      </div>
      <div className="mt-10">
        <Button className='mt-10'name="JE DÉCOUVRE LES BONUS DU MOMENT"></Button>
      </div>
      <div
          className="-bottom-2 left-0 min-h-[80px] w-screen mt-20"
          style={{
            backgroundImage: `url(/wave.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
    </section>
  );
};

export default Steps;
