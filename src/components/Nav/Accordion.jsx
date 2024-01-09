import { IoAddOutline, IoRemove } from "react-icons/io5";
import { subCategory } from "../../data/menuItems";

const Accordion = () => {
  return (
    <ul>
      {subCategory.map((subCategoryItem, index) => {
        return (
          <li key={index} className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">{subCategoryItem.title}</p>

              <div>
                <IoAddOutline className="add-icon" />
                <IoRemove className="remove-icon" />
              </div>
            </button>
            {subCategoryItem.subItems.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="submenu-category-list"
                  data-accordion
                >
                  <li className="submenu-category">
                    <a href={item.link} className="submenu-title">
                      {item.title}
                    </a>
                  </li>
                </ul>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
