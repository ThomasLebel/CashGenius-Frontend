const ApplicantCard = ({firstname, lastname, createdAt, status}) => {

  const date = new Date(createdAt)
  const formattedDate = date.toLocaleDateString("fr-FR")
  
  let dotColor = "bg-grey-600"

  switch (status){
    case 'En attente':
        dotColor = 'bg-orange-400'
        break;
    case 'En cours' :
        dotColor = 'bg-green-600'
        break;
    case 'Terminé':
        dotColor = 'bg-green-400'
        break;
    case 'Annulé' :
        dotColor = 'bg-red-500'
  }
  

  return (
    <>
      <div className="w-full h-14 rounded-lg flex justify-between bg-white shadow-lg mb-3">
        <div className=" h-full rounded-lg p-2 flex flex-col justify-center">
          <span className="text-xs text-secondaryColor font-medium">
            Nom : <span className="text-black font-semibold">{firstname} {lastname}</span>
          </span>
          <span className="text-xs text-secondaryColor font-medium">
            Date d'inscription : <span className="text-black font-semibold ">{formattedDate}</span>
          </span>
        </div>
        <div className="h-fullrounded-lg flex items-center w-[85px]">
          <span className={`w-3 h-3 rounded-full ${dotColor} inline-block mr-1`}></span>
          <span className="text-xs text-secondaryColor font-semibold">
            {status}
          </span>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
