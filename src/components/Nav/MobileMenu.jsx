import { IoAddOutline, IoCloseOutline, IoRemove } from "react-icons/io5";
import Accordion from "./Accordion";
import SocialLinks from "../Header/SocialLinks";
import { bottomMenu } from "../../data/menuItems";
import { FaCaretLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const navClassName = `mobile-navigation-menu has-scrollbar ${
    showMenu ? "active" : ""
  }`;
  return (
    <nav className={navClassName}>
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>

        <button className="menu-close-btn" onClick={() => setShowMenu(false)}>
          <IoCloseOutline />
        </button>
      </div>

      <ul className="mobile-menu-category-list">
        <li className="menu-category">
          <a href="#" className="menu-title">
            Home
          </a>
        </li>

        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Categories</p>

            <div>
              <IoAddOutline className="add-icon" />
              <IoRemove className="remove-icon" />
            </div>
          </button>
          <Accordion />
        </li>

        <li className="menu-category">
          <a href="#" className="menu-title">
            Blog
          </a>
        </li>

        <li className="menu-category">
          <a href="#" className="menu-title">
            Hot Offers
          </a>
        </li>
      </ul>

      <div className="menu-bottom">
        <ul className="menu-category-list">
          {bottomMenu.map((item, index) => {
            return (
              <li key={index} className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">{item.title}</p>

                  <FaCaretLeft className="caret-back" />
                </button>
                <ul className="submenu-category-list" data-accordion>
                  {item.subItems.map((subItem, index) => {
                    return (
                      <li key={index} className="submenu-category">
                        <a href="#" className="submenu-title">
                          {subItem}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <ul className="social-container">
          <SocialLinks />
        </ul>
      </div>
    </nav>
  );
};

MobileMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
