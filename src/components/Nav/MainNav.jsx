import { useState } from "react";
import DesktopNav from "./DesktopNav";
import "./Nav.css";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <DesktopNav />
      <MobileNav handleShowMenu={handleShowMenu} />
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default MainNav;
