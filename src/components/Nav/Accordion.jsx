import { useState } from "react";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import { subCategory } from "../../data/menuItems";
import PropTypes from "prop-types";

const Accordion = ({ showAccordion }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionClass = `submenu-category-list ${
    showAccordion ? "active" : ""
  }`;

  return (
    <ul className={accordionClass}>
      {subCategory.map((subCategoryItem, index) => {
        const isAccordionActive = activeAccordion === index;

        return (
          <li
            key={index}
            className={`submenu-category ${isAccordionActive ? "active" : ""}`}
          >
            <button
              className="accordion-menu"
              onClick={() => handleAccordionClick(index)}
            >
              <p className="menu-title">{subCategoryItem.title}</p>

              <div>
                {isAccordionActive ? (
                  <IoRemove className="remove-icon" />
                ) : (
                  <IoAddOutline className="add-icon" />
                )}
              </div>
            </button>

            <ul
              className={`submenu-category-list ${
                isAccordionActive ? "active" : ""
              }`}
            >
              {subCategoryItem.subItems.map((item, subIndex) => (
                <li key={subIndex} className="submenu-category">
                  <a href={item.link} className="submenu-title">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

Accordion.propTypes = {
  showAccordion: PropTypes.bool.isRequired,
};

export default Accordion;
