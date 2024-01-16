import { IoAddOutline, IoRemove } from "react-icons/io5";
import SidebarSubmenu from "./SidebarSubmenu";
import PropTypes from "prop-types";

const SidebarAccordionMenu = ({
  title,
  imgLink,
  isActive,
  onClick,
  subItems,
}) => (
  <li className="sidebar-menu-category">
    <button
      className={`sidebar-accordion-menu ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="menu-title-flex">
        <img
          src={imgLink}
          alt={title}
          width="20"
          height="20"
          className="menu-title-img"
        />
        <p className="menu-title">{title}</p>
      </div>
      <div>
        <IoAddOutline className="add-icon" />
        <IoRemove className="remove-icon" />
      </div>
    </button>
    <ul className={`sidebar-submenu-category-list ${isActive ? "active" : ""}`}>
      <SidebarSubmenu subItems={subItems} />
    </ul>
  </li>
);

SidebarAccordionMenu.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  subItems: PropTypes.array,
};

export default SidebarAccordionMenu;
