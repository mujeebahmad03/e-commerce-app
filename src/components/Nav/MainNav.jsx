import DesktopNav from "./DesktopNav";
import "./Nav.css";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <MobileMenu />
    </>
  );
};

export default MainNav;
