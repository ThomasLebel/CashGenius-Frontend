import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import Drawer from './Drawer'
import Menu from "./Menu";

function Header() {
  const [isSelected, setIsSelected] = useState();
  const [drawerActive, setDrawerActive] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [drawerActive]);

  const closeDrawer = () => {
    setDrawerActive(false)
  }

  return (
      <header className="w-screen h-[70px] bg-white flex items-center justify-between  fixed z-50 top-0 drop-shadow-sm">
        <div className="ml-5">
          <Image  width={208} height={25} src="/CashGeniusLogo.png" alt="Logo Cash Genius"></Image>
        </div>
        <Menu currentPage={currentPage}/>
        <div className="flex items-start mr-10 xl:hidden">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            onClick={() => setDrawerActive(true)}
          />
        </div>
        <Drawer drawerActive={drawerActive} currentPage={currentPage} closeDrawer={closeDrawer}/>
      </header>
  );
}

export default Header;
