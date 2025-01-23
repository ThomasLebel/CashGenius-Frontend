import BonusItem from "./BonusItem";
import Bonuses from "../../Data/Bonuses";

const BonusComparator = () => {
  return (
    <section className="mt-10 flex justify-center">
      <div className=" flex flex-wrap justify-center  xl:w-2/4 w-5/6">
        {Bonuses.map((bonus, i) => {
            return (
                <BonusItem
          number={i+1}
          name={bonus.name}
          title={bonus.title}
          amount={bonus.amount}
          type={bonus.type}
          asterisk={bonus.asterisk}
        />
            )
        })}
        
      </div>
    </section>
  );
};

export default BonusComparator;
