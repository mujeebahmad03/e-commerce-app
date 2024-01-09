import { TiShoppingCart } from "react-icons/ti";
import { IoHomeOutline, IoMenuOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const MobileNav = ({ handleShowMenu }) => {
  return (
    <div className="mobile-bottom-navigation">
      <button className="action-btn" onClick={handleShowMenu}>
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

      <button className="action-btn" data-mobile-menu-open-btn>
        <IoGridOutline />
      </button>
    </div>
  );
};

MobileNav.propTypes = {
  handleShowMenu: PropTypes.func.isRequired,
};

export default MobileNav;
