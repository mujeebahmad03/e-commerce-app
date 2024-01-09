import { menuItems } from "../../data/menuItems";
import Categories from "./Categories";


const DesktopNav = () => {
  return (
    <nav className="desktop-navigation-menu">
      <ul className="desktop-menu-category-list">
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index} className="menu-category">
              <a href={menuItem.link} className="menu-title">
                {menuItem.title}
              </a>
            </li>
          );
        })}
        <li className="dropdown-panel">
          <Categories />
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav