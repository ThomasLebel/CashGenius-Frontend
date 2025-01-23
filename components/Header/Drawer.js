import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

function Header({ drawerActive, currentPage, closeDrawer }) {
  return (
    <Drawer
      placement="right"
      open={drawerActive}
      width={300}
      closeIcon={null}
      styles={{
        header: { padding: "0", borderBottom: "none" },
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
          onClick={closeDrawer}
        />
      </div>
      <nav>
        <ul className="flex flex-col justify-around font-sans font-medium text-sm h-1/3 mt-12">
          <li
            className={`${
              currentPage === "/" && "border"
            } drawer-item`}
          >
            <Link href="/" className="menu-link">GENIUS PROGRAMME</Link>
          </li>
          <li
            className={`${
              currentPage === "/comparateur-bonus" && "border"
            } drawer-item`}
          >
            <Link href="/comparateur-bonus" className="menu-link">LES BONUS</Link>
          </li>
          <li
            className={`${
              currentPage === "/tutoriels" && "border"
            } drawer-item`}
          >
            <Link href="/tutoriels" className="menu-link">LES TUTOS</Link>
          </li>
          <li
            className={`${
              currentPage === "/tutos" && "border"
            } drawer-item`}
          >
            <a className="menu-link">
              INSCRIPTION GRATUITE
            </a>
          </li>
          <li
            className={`${
              currentPage === "/affilies" && "border"
            } drawer-item`}
          >
            <a className="menu-link">
              ESPACE AFFILIÉ
            </a>
          </li>
        </ul>
      </nav>
    </Drawer>
  );
}

export default Header;
