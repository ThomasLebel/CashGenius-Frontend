import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ComparatorTitle from "../components/BonusComparator/ComparatorTitle";
import BonusComparator from "../components/BonusComparator/BonusComparator";
import RegistrationForm from "../components/Shared/RegistrationForm/RegistrationForm"

function Comparator() {
  return (
    <>
      <Header></Header>
      <main className=" font-sans">
        <ComparatorTitle />
        <BonusComparator/>
        <RegistrationForm/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Comparator;
