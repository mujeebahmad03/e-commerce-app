import TopHeader from "./TopHeader";
import "./Header.css";
import MainHeader from "./MainHeader";
import MainNav from "../Nav/MainNav";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MainHeader />
      <MainNav />
    </header>
  );
};

export default Header;
