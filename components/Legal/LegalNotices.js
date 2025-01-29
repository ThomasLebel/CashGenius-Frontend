const LegalNotices = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center mt-32 ">
          <h1 className="font-bold text-2xl text-center md:text-4xl w-3/4">
            Mentions légales
          </h1>
          <div className="w-4/5 mt-10 flex flex-col justify-center">
            <p className="text-secondaryColor">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique, il est précisé aux
              utilisateurs du site Cash Genius l'identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
            <h2 className="font-semibold text-2xl mt-10">Edition du site </h2>
            <p className="text-secondaryColor mt-5">
              Le présent site, accessible à l’URL www.cash-genius.com (le « Site
              »), <br />
              est édité par : Thomas LEBEL, résidant 5 rue du monastère, 38450
              VIF, de nationalité Française (France), né(e) le 13/04/1998
            </p>
            <h2 className="font-semibold text-2xl mt-10">Hébergement</h2>
            <p className="text-secondaryColor mt-5">
              Le Site est hébergé par la société Vercel, situé 440 N Barranca
              Ave #4133 Covina, CA 91723 USA, (contact téléphonique ou email :
              +15592887060).
            </p>
            <h2 className="font-semibold text-2xl mt-10">
              Directeur de publication
            </h2>
            <p className="text-secondaryColor mt-5">
              Le Directeur de la publication du Site est Thomas LEBEL.
            </p>
            <h2 className="font-semibold text-2xl mt-10">Nous contacter</h2>
            <p className="text-secondaryColor mt-5">
              Par téléphone : +33769364264 <br /> Par email :
              programme.cash.genius@gmail.com <br />
              Par courrier : 5 rue du monastère, 38450 VIF
            </p>
            <h2 className="font-semibold text-2xl mt-10">
              Données personnelles
            </h2>
            <p className="text-secondaryColor mt-5 mb-20">
              Le traitement de vos données à caractère personnel est régi par
              notre Charte du respect de la vie privée, disponible depuis la
              section "Charte de Protection des Données Personnelles",
              conformément au Règlement Général sur la Protection des Données
              2016/679 du 27 avril 2016 («RGPD»).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalNotices;
