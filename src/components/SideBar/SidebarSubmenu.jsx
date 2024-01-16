const SidebarSubmenu = ({ subItems }) => {
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

export default SidebarSubmenu;
