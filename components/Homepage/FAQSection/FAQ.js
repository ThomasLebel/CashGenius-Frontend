import FAQData from "../../../Data/FAQData";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col pt-20 w-5/6 items-center">
        <h2 className="font-bold text-sm md:text-base mb-2 text-secondaryColor ">
          WHAT THE FUCK ? 🤯
        </h2>
        <h1 className="font-bold text-2xl md:text-4xl text-center ">
          QUESTIONS LES PLUS FRÉQUENTES
        </h1>
        <Collapse
          accordion
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <span>
              {isActive ? (
                <p className="text-3xl !font-bold text-mainColor">-</p>
              ) : (
                <p className="text-2xl !font-bold text-mainColor">+</p>
              )}
            </span>
          )}
          className="mt-10 !border-0 lg:w-4/6 [&_.ant-collapse-content]:!border-0 !bg-[#F8F8F8]"
        >
          {FAQData.map((item, i) => {
            return (
              <Panel
                header={
                  <p className="text-secondaryColor font-medium text-sm ">
                    {item.question}
                  </p>
                }
                key={i}
                className="bg-white !rounded-md mb-5 shadow-md !overflow-hidden !border-none"
              >
                <p className="text-secondaryColor font-light text-sm">
                  {item.answer}
                </p>
              </Panel>
            );
          })}
        </Collapse>
        <div
          className="-bottom-2 left-0 min-h-[80px] w-screen mt-20"
          style={{
            backgroundImage: `url(/wave.png)`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
};

export default FAQ;
