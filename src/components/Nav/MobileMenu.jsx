import { useState } from "react";
import { IoAddOutline, IoCloseOutline, IoRemove } from "react-icons/io5";
import Accordion from "./Accordion";
import SocialLinks from "../Header/SocialLinks";
import { bottomMenu } from "../../data/menuItems";
import { FaCaretLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const [state, setState] = useState({
    showAccordion: false,
    activeIndex: null,
  });

  const toggleAccordion = () =>
    setState({ ...state, showAccordion: !state.showAccordion });

  const handleAccordionClick = (index) => {
    setState({
      ...state,
      activeIndex: state.activeIndex === index ? null : index,
    });
  };
  const navClassName = `mobile-navigation-menu has-scrollbar ${
    showMenu ? "active" : ""
  }`;

  const renderSubMenuItems = (subItems) => {
    return subItems.map((subItem, index) => (
      <li key={index} className="submenu-category">
        <a href="#" className="submenu-title">
          {subItem}
        </a>
      </li>
    ));
  };

  const renderBottomMenu = () => {
    return bottomMenu.map((item, index) => (
      <li key={index} className="menu-category">
        <button
          className={`accordion-menu ${
            state.activeIndex === index ? "active" : ""
          }`}
          onClick={() => handleAccordionClick(index)}
        >
          <p className="menu-title">{item.title}</p>
          <FaCaretLeft className="caret-back" />
        </button>
        <ul
          className={`submenu-category-list ${
            state.activeIndex === index ? "active" : ""
          }`}
        >
          {renderSubMenuItems(item.subItems)}
        </ul>
      </li>
    ));
  };

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
          <button className="accordion-menu" onClick={toggleAccordion}>
            <p className="menu-title">Categories</p>

            <div>
              {state.showAccordion ? (
                <IoRemove className="remove-icon" />
              ) : (
                <IoAddOutline className="add-icon" />
              )}
            </div>
          </button>
          <Accordion showAccordion={state.showAccordion} />
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
        <ul className="menu-category-list">{renderBottomMenu()}</ul>

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
