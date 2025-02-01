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

      maskClosable={true}
      onClose={closeDrawer}
    >
      <div
        style={{
          position: "absolute",
          top: 31,
          right: 30,
        }}
      >
        <CloseOutlined style={{ fontSize: "20px" }} onClick={closeDrawer} />
      </div>
      <nav>
        <ul className="flex flex-col justify-around font-sans font-medium text-sm h-1/3 mt-12">
          <Link href="/" className="menu-link">
            <li className={`${currentPage === "/" && "border"} drawer-item`}>
              GENIUS PROGRAMME
            </li>
          </Link>
          <Link href="/comparateur-bonus" className="menu-link">
            <li
              className={`${
                currentPage === "/comparateur-bonus" && "border"
              } drawer-item`}
            >
              LES BONUS
            </li>
          </Link>
          <Link href="/tutoriels" className="menu-link">
            <li
              className={`${
                currentPage === "/tutoriels" && "border"
              } drawer-item`}
            >
              LES TUTOS
            </li>
          </Link>
          <Link href="/espace-affilie/login" className="menu-link">
            <li
              className={`${
                currentPage === "/espace-affilie/login" ||
                currentPage === "/espace-affilie/signup" ||
                currentPage === "/espace-affilie/dashboard"
                  ? "border"
                  : ""
              } drawer-item`}
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
                currentPage === "/tutos" && "border"
              } drawer-item bg-mainColor text-white hover:!text-white hover:!bg-[#ac054a] !p-2`}
            >
              INSCRIPTION GRATUITE
            </li>
          </Link>
        </ul>
      </nav>
    </Drawer>
  );
}

export default Header;
