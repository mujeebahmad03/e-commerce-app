import PropTypes from "prop-types";
import FooterNavItem from "./FooterNavItem";
import FooterContactItem from "./FooterContactItem";
import SocialLinks from "../Header/SocialLinks";

const FooterNavList = ({ title, items, navItem }) => {
  const renderNavItem = () => {
    if (navItem === "contact") return <FooterContactItem />;
    else if (navItem === "socials") {
      return (
        <li>
          <ul className="social-links">
            <SocialLinks footer={true} />
          </ul>
        </li>
      );
    } else return <FooterNavItem items={items} />;
  };
  return (
    <ul className="footer-nav-list">
      <li className="footer-nav-item">
        <h2 className="nav-title">{title}</h2>
      </li>
      {renderNavItem()}
    </ul>
  );
};

FooterNavList.propTypes = {
  title: PropTypes.string.isRequired,
  navItem: PropTypes.string,
  items: PropTypes.array,
};

export default FooterNavList;
