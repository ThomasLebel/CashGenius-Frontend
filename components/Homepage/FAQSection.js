import FAQ from "../../Data/FAQ";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FAQSection = () => {
  return (
    <section className=" bg-backgroundColor flex justify-center">
      <div className="flex flex-col pt-20 w-5/6 items-center">
        <h2 className="font-bold text-base mb-2 text-secondaryColor ">
          WHAT THE FUCK ? 🤯
        </h2>
        <h1 className="font-bold text-2xl md:text-4xl ">
          QUESTIONS LES PLUS FRÉQUENTES
        </h1>
        <Collapse
          accordion
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <span>
              {isActive ? (
                <p className="text-xl w-5 h-5 text-mainColor">-</p>
              ) : (
                <p className="text-xl w-5 h-5 text-mainColor">+</p>
              )}
            </span>
          )}
          className="mt-10 !border-0 lg:w-4/6 [&_.ant-collapse-content]:!border-0 "
        >
          {FAQ.map((item, i) => {
            return (
              <Panel
                header={
                  <p className="text-secondaryColor font-medium text-base">
                    {item.question}
                  </p>
                }
                key={i}
                className="bg-white !rounded-md mb-5 shadow-sm !overflow-hidden !border-none"
              >
                <p className="text-secondaryColor font-light text-base">
                  {item.answer}
                </p>
              </Panel>
            );
          })}
        </Collapse>
        ,
      </div>
    </section>
  );
};

export default FAQSection;
