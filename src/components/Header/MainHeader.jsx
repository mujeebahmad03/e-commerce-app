import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
const MainHeader = () => {
  return (
    <div className="header-main">
      <div className="container">
        <a href="#" className="header-logo">
          <img src="store-logo.svg" alt="logo" width="120" height="36" />
        </a>
        
        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />
        
          <button className="search-btn">
            <IoSearchOutline />
          </button>
        </div>
        
        <div className="header-user-actions">
          <button className="action-btn">
            <FaRegUser />
          </button>
        
          <button className="action-btn">
            <FaRegHeart />
            <span className="count">0</span>
          </button>
        
          <button className="action-btn">
            <TiShoppingCart />
            <span className="count">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
