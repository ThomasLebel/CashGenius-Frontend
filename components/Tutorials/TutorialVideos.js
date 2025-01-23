import Button from "../Shared/Button";
import Bonuses from "../../Data/Bonuses";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TutorialVideos = () => {
  const [videoLink, setVideoLink] = useState("https://youtu.be/wnyjvbTB2o8");
  const [websiteSelected, setWebsiteSelected] = useState("PMU");
  const [registerLink, setRegisterLink] = useState("https://inscription.pmu.fr/?&codePromo=SPORT#/civilite")
    
  const handleClick = (registerVideo, name, registerLink) => {
    setVideoLink(registerVideo)
    setWebsiteSelected(name)
    setRegisterLink(registerLink)
  }

  return (
    <section>
       <div className="mt-10 flex justify-center">  
      <div className="lg:w-2/4 w-5/6 flex justify-center flex-wrap">
        {Bonuses.map((website, i) => {
          if (website.registerVideo) {
            return (
              <button
                key={i}
                className={`hover:bg-[#ac054a]" font-medium px-3 py-2 m-2 rounded-md text-mainColor text-xs w-[125px] border-2 border-mainColor hover:bg-gray-200 ${
                  website.name === websiteSelected &&
                  "bg-[#ce0251] hover:!bg-[#ac054a] text-white border-none"
                }`}
                onClick={() => handleClick(website.registerVideo, website.name, website.registerLink)}
              >
                {website.name}
              </button>
            );
          }
        })}
        <div
          className="mt-5 relative w-full xl:w-3/5 xl:pb-[34%] pb-[56.25%]"
        >
          <ReactPlayer
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            url={videoLink}
            controls={true}
          />
        </div>
        <div onClick={() => window.open(registerLink, "_blank")} className="w-full flex justify-center mt-10">
            <Button  name={`JE M'INSCRIS SUR ${websiteSelected}`}></Button>
        </div>
      </div>
      </div>
      <div
        className="-bottom-2 left-0 min-h-[80px] w-screen mt-20"
        style={{
          backgroundImage: `url(/wave.png)`,
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
};

export default TutorialVideos;
