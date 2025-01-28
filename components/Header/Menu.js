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
        currentPage === "/tutoriels" && "border"
      } menu-item`}
    >
      <Link href="/tutoriels" className="menu-link">LES TUTOS</Link>
    </li>
    <li
      className={`${
        currentPage === "/#inscription" && "border"
      } menu-item px-3 mr-3`}
    >
      <Link href="#inscription" className="menu-link">INSCRIPTION GRATUITE</Link>
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
