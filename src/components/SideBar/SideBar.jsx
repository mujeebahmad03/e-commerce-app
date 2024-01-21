import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";
import { bestSellerProducts, categories } from "../../data/menuItems";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { toggleCategoryMenu } from "../../redux/slice/menuSlice";
import SidebarAccordionMenu from "./SidebarAccordionMenu";
import ShowcaseWrapper from "../MinimalProduct/ShowcaseWrapper";

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
          {categories.map((item, index) => {
            const isAccordionActive = activeIndex === index;
            return (
              <SidebarAccordionMenu
                key={index}
                {...item}
                isActive={isAccordionActive}
                onClick={() => handleAccordionClick(index)}
              />
            );
          })}
        </ul>
      </div>

      <ShowcaseWrapper
        heading="Best seller"
        showcaseData={bestSellerProducts}
      />
    </aside>
  );
};

export default SideBar;
