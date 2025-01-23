import Link from "next/link";


function Menu({currentPage}) {
  return (
    <ul className="hidden xl:flex justify-around font-sans font-medium text-sm mr-20 w-auto">
    <li
      className={`${
        currentPage === "/" && "border"
      } menu-item`}
    >
      <Link href="/" className="menu-link">GENIUS PROGRAMME</Link>
    </li>
    <li
      className={`${
        currentPage === "/comparateur-bonus" && "border"
      } menu-item`}
    >
      <Link href="/comparateur-bonus" className="menu-link">LES BONUS</Link>
    </li>
    <li
      className={`${
        currentPage === "/tutos" && "border"
      } menu-item`}
    >
      <a className="menu-link">LES TUTOS</a>
    </li>
    <li
      className={`${
        currentPage === "/#inscription" && "border"
      } menu-item px-3 mr-3`}
    >
      <a className="menu-link"> INSCRIPTION GRATUITE</a>
    </li>
    <li
      className={`${
        currentPage === "/affilies" && "border"
      } menu-item`}
    >
      <a className="menu-link">ESPACE AFFILIÉ</a>
    </li>
  </ul>
 );
}

export default Menu;
