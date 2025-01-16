import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Image from "next/image";

function Header() {
  const [isSelected, setIsSelected] = useState();
  const [drawerActive, setDrawerActive] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [drawerActive]);

  return (
    <div className=''>
      <main className="w-screen h-[70px] bg-white flex items-center justify-between m-[10px]">
        <div className="ml-5">
          <Image  width={208} height={25} src="/CashGeniusLogo.png"></Image>
        </div>
        <ul className="hidden xl:flex justify-around font-sans font-medium text-sm mr-20 w-auto">
            <li
              className={`${
                currentPage === "/" && "border"
              } border-mainColor rounded-md p-1 px-3 hover:text-mainColor mr-3 cursor-pointer`}
            >
              <a>GENIUS PROGRAMME</a>
            </li>
            <li
              className={`${
                currentPage === "/bonus" && "border"
              } border-mainColor rounded-md p-1 px-3 mr-3  hover:text-mainColor cursor-pointer`}
            >
              <a>LES BONUS</a>
            </li>
            <li
              className={`${
                currentPage === "/tutos" && "border"
              } border-mainColor rounded-md p-1 px-3 mr-3  hover:text-mainColor cursor-pointer`}
            >
              <a>LES TUTOS</a>
            </li>
            <li
              className={`${
                currentPage === "/tutos" && "border"
              } border-mainColor rounded-md p-1 px-3 mr-3  hover:text-mainColor cursor-pointer`}
            >
              <a>INSCRIPTION GRATUITE</a>
            </li>
            <li
              className={`${
                currentPage === "/affilies" && "border"
              } border-mainColor rounded-md p-1  hover:text-mainColor cursor-pointer`}
            >
              <a>ESPACE AFFILIÉ</a>
            </li>
          </ul>
        <div className="flex items-start mr-10 xl:hidden">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            onClick={() => setDrawerActive(true)}
          />
        </div>
        <Drawer
          placement="right"
          open={drawerActive}
          width={300}
          closeIcon={null}
          styles={{
            header: { padding: "0", borderBottom: "none" }
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 31,
              right: 30,
            }}
          >
            <CloseOutlined
              style={{ fontSize: "20px" }}
              onClick={() => setDrawerActive(false)}
            />
          </div>
          <ul className="flex flex-col justify-around font-sans font-medium text-sm h-1/3 mt-12">
            <li
              className={`${
                currentPage === "/" && "border"
              } border-mainColor rounded-md p-1 hover:text-mainColor cursor-pointer`}
            >
              <a className="hover:text-mainColor cursor-pointer">GENIUS PROGRAMME</a>
            </li>
            <li
              className={`${
                currentPage === "/bonus" && "border"
              } border-mainColor rounded-md p-1 `}
            >
              <a className="hover:text-mainColor cursor-pointer">LES BONUS</a>
            </li>
            <li
              className={`${
                currentPage === "/tutos" && "border"
              } border-mainColor rounded-md p-1`}
            >
              <a className="hover:text-mainColor cursor-pointer">LES TUTOS</a>
            </li>
            <li
              className={`${
                currentPage === "/tutos" && "border"
              } border-mainColor rounded-md p-1`}
            >
              <a className="hover:text-mainColor cursor-pointer">INSCRIPTION GRATUITE</a>
            </li>
            <li
              className={`${
                currentPage === "/affilies" && "border"
              } border-mainColor rounded-md p-1 `}
            >
              <a className="hover:text-mainColor cursor-pointer">ESPACE AFFILIÉ</a>
            </li>
          </ul>
        </Drawer>
      </main>
    </div>
  );
}

export default Header;
