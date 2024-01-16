import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";
import { category } from "../../data/menuItems";
import { IoAddOutline, IoCloseOutline, IoRemove } from "react-icons/io5";
import { useState } from "react";
import { toggleCategoryMenu } from "../../slice/menuSlice";
import ProductShowcase from "./ProductShowcase";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const isCategoryMenuOpen = useSelector(
    (state) => state.menu.isCategoryMenuOpen
  );

  const dispatch = useDispatch();

  const closeCategoryMenu = () => dispatch(toggleCategoryMenu());

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderSubMenuItems = (subItems) => {
    return subItems.map((subItem, index) => (
      <li key={index} className="sidebar-submenu-category">
        <a href={subItem.link} className="sidebar-submenu-title">
          <p className="product-name">{subItem.title}</p>
          <data value={subItem.stock} className="stock" title="Available Stock">
            {subItem.stock}
          </data>
        </a>
      </li>
    ));
  };

  return (
    <aside
      className={`sidebar  has-scrollbar ${isCategoryMenuOpen ? "active" : ""}`}
    >
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn" onClick={closeCategoryMenu}>
            <IoCloseOutline />
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {category.map((item, index) => {
            const isAccordionActive = activeIndex === index;
            return (
              <li key={index} className="sidebar-menu-category">
                <button
                  className={`sidebar-accordion-menu ${
                    isAccordionActive ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="menu-title-flex">
                    <img
                      src={item.imgLink}
                      alt={item.title}
                      width="20"
                      height="20"
                      className="menu-title-img"
                    />

                    <p className="menu-title">{item.title}</p>
                  </div>

                  <div>
                    <IoAddOutline className="add-icon" />
                    <IoRemove className="remove-icon" />
                  </div>
                </button>

                <ul
                  className={`sidebar-submenu-category-list ${
                    isAccordionActive ? "active" : ""
                  }`}
                >
                  {renderSubMenuItems(item.subItems)}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      <ProductShowcase />
    </aside>
  );
};

export default SideBar;
