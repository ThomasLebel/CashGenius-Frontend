import NumberIncrementation from "./NumberIncrementation";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const StatsWithVideo = () => {
  const [investment, setInvestment] = useState(175);
  const [profit, setProfit] = useState(300);
  const [satisfaction, setSatisfaction] = useState(100);

  const { ref: refInvestment, inView: inViewInvestment } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refProfit, inView: inViewProfit } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refSatisfaction, inView: inViewSatisfaction } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className=" bg-backgroundColor">
      <div className="flex flex-col items-center mt-20 ">
        <h1 className="font-bold text-2xl text-center md:text-4xl w-3/4">
          PROGRAMME CASH GENIUS 🧞‍♂️
        </h1>
        <p className="text-secondaryColor font-light text-sm mt-5 text-center px-10 md:text-lg">
          Programme de 4 à 5 semaines <span className="font-bold">GRATUIT</span>{" "}
          et valable une fois par personne
        </p>
        <div className="flex flex-row flex-wrap w-3/6 mt-4">
          <NumberIncrementation
            ref={refInvestment}
            inView={inViewInvestment}
            value={investment}
            dataType="€"
            dataName="d'investissement"
          />
          <NumberIncrementation
            ref={refProfit}
            inView={inViewProfit}
            value={profit}
            dataType="€"
            dataName="de bénéfice"
          />
          <NumberIncrementation
            ref={refSatisfaction}
            inView={inViewSatisfaction}
            value={satisfaction}
            dataType="%"
            dataName="de satisfaction"
            noBorder={true}
          />
        </div>
        <div className="my-10 lg:w-[40vw] w-[80vw] lg:h-[47.5vh] h-[25vh] border-4 rounded-md border-mainColor">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/5gw5fqD2_Pc"
            light="/comment-ca-fonctionne.webp"
            controls="true"
          />
        </div>
        <Button className="pt-10" name="JE M'INSCRIS AU GENIUS PROGRAMME"></Button>
      </div>
    </section>
  );
};

export default StatsWithVideo;
