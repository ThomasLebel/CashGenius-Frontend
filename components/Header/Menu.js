import Link from "next/link";

function Menu({ currentPage }) {
  return (
    <ul className="hidden xl:flex justify-around font-sans font-medium text-sm mr-20 w-auto">
      <Link href="/" className="menu-link">
        <li className={`${currentPage === "/" && "border"} menu-item`}>
          GENIUS PROGRAMME
        </li>
      </Link>
      <Link href="/comparateur-bonus" className="menu-link">
        <li
          className={`${
            currentPage === "/comparateur-bonus" && "border"
          } menu-item`}
        >
          LES BONUS
        </li>
      </Link>
      <Link href="/tutoriels" className="menu-link">
        <li className={`${currentPage === "/tutoriels" && "border"} menu-item`}>
          LES TUTOS
        </li>
      </Link>
      <Link href="/espace-affilie/login" className="menu-link">
        <li
          className={`menu-item ${
            currentPage === "/espace-affilie/login" ||
            currentPage === "/espace-affilie/signup" ||
            currentPage === "/espace-affilie/dashboard"
              ? "border"
              : ""
          }`}
        >
          ESPACE AFFILIÉ
        </li>
      </Link>
      <Link
        href={`${
          currentPage === "/espace-affilie/login" ||
          currentPage === "/espace-affilie/signup" ||
          currentPage === "/espace-affilie/dashboard"
            ? "/#inscription"
            : "#inscription"
        }`}
        className="menu-link"
      >
        <li
          className={`${
            currentPage === "/#inscription" && "border"
          } menu-item px-3 mr-3 bg-mainColor text-white hover:!text-white hover:!bg-[#ac054a]`}
        >
          INSCRIPTION GRATUITE
        </li>
      </Link>
    </ul>
  );
}

export default Menu;
