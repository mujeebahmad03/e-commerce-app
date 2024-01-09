import { subCategory } from "../../data/menuItems";

const Categories = () => {
  return (
    <>
      {subCategory.map((subCategoryItem, index) => {
        return (
          <ul key={index} className="dropdown-panel-list">
            <li className="list-items">
              <a href={subCategoryItem.link} className="menu-title">
                {subCategoryItem.title}
              </a>

              <ul className="panel-list-items">
                {subCategoryItem.subItems.map((subItem, index) => {
                  return (
                    <li key={index} className="panel-list-item">
                      <a href={subItem.link}>{subItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Categories;
