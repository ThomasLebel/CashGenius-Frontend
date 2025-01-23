import BonusItem from "./BonusItem";
import Bonuses from "../../Data/Bonuses";
import BonusModal from "./BonusModal";

import { useState } from "react";

const BonusComparator = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [registerLink, setRegisterLink] = useState("");

  const handleModal = (name, title, amount, type, videoLink, registerLink) => {
    if (openModal) {
      setName("");
      setTitle("");
      setAmount("");
      setType("");
      setVideoLink("");
      setRegisterLink("");
      setOpenModal(false);
    } else {
      console.log(name);
      setName(name);
      setTitle(title);
      setAmount(amount);
      setType(type);
      setVideoLink(videoLink);
      setRegisterLink(registerLink);
      setOpenModal(true);
    }
  };

  return (
    <section>
      <div className="mt-10 flex justify-center">
        <div className=" flex flex-wrap justify-center  xl:w-2/4 w-5/6">
          {Bonuses.map((bonus, i) => {
            return (
              <BonusItem
                key={i}
                number={i + 1}
                name={bonus.name}
                title={bonus.title}
                amount={bonus.amount}
                type={bonus.type}
                asterisk={bonus.asterisk}
                handleModal={handleModal}
                videoLink={bonus.videoLink}
                registerLink={bonus.registerLink}
              />
            );
          })}
          <BonusModal
            openModal={openModal}
            handleModal={handleModal}
            name={name}
            title={title}
            amount={amount}
            type={type}
            videoLink={videoLink}
            registerLink={registerLink}
          />
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

export default BonusComparator;
