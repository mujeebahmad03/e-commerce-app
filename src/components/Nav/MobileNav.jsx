import { useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { IoHomeOutline, IoMenuOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { toggleCategoryMenu, toggleNavMenu } from "../../redux/slice/menuSlice";

const MobileNav = () => {
  const dispatch = useDispatch();
  const openCategoryMenu = () => dispatch(toggleCategoryMenu());
  const showNavMenu = () => dispatch(toggleNavMenu());

  return (
    <div className="mobile-bottom-navigation">
      <button className="action-btn" onClick={showNavMenu}>
        <IoMenuOutline />
      </button>

      <button className="action-btn">
        <TiShoppingCart />
        <span className="count">0</span>
      </button>

      <button className="action-btn">
        <IoHomeOutline />
      </button>

      <button className="action-btn">
        <FaRegHeart />
        <span className="count">0</span>
      </button>

      <button className="action-btn" onClick={openCategoryMenu}>
        <IoGridOutline />
      </button>
    </div>
  );
};

export default MobileNav;
