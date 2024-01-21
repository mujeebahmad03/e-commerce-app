import PropTypes from "prop-types";

const FooterNavItem = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="footer-nav-item">
          <a href={item.url} className="footer-nav-link">
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
};

FooterNavItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FooterNavItem;
