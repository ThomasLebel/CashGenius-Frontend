
function Menu({currentPage}) {
  return (
    <ul className="hidden xl:flex justify-around font-sans font-medium text-sm mr-20 w-auto">
    <li
      className={`${
        currentPage === "/" && "border"
      } menu-item`}
    >
      <a className="menu-link">GENIUS PROGRAMME</a>
    </li>
    <li
      className={`${
        currentPage === "/bonus" && "border"
      } menu-item`}
    >
      <a className="menu-link">LES BONUS</a>
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
        currentPage === "/tutos" && "border"
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
