import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ComparatorTitle from "../components/BonusComparator/ComparatorTitle";
import BonusComparator from "../components/BonusComparator/BonusComparator";

function Comparator() {
  return (
    <>
      <Header></Header>
      <main className=" font-sans">
        <ComparatorTitle />
        <BonusComparator/>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Comparator;
