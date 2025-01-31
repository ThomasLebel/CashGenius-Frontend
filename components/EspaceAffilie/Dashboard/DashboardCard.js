import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DashboardCard = ({icon, title, value}) => {
    return (
        <>
        <div className="w-64 h-24 rounded-lg shadow-lg bg-white flex m-5">
            <div className="w-1/5 h-full flex justify-center items-center">
                <FontAwesomeIcon icon={icon} color={"#ce0251"} size='xl'></FontAwesomeIcon>
            </div>
            <div className="w-4/5 h-full0 flex flex-col justify-center">
                <h3 className="font-semibold text-secondaryColor text-xs">{title}</h3>
                <span className="font-semibold text-2xl">{value}</span>
            </div>
        </div>
       </> 
    );
}

export default DashboardCard;
