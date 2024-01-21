import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import PropTypes from "prop-types";

const SocialLinks = ({ footer }) => {
  const listClassName = footer ? "footer-nav-item" : "";
  const socialLinkClassName = footer ? "footer-nav-link" : "social-link";

  return (
    <>
      <li className={listClassName}>
        <a href="#" className={socialLinkClassName}>
          <MdOutlineFacebook />
        </a>
      </li>

      <li className={listClassName}>
        <a href="#" className={socialLinkClassName}>
          <FaInstagram />
        </a>
      </li>

      <li className={listClassName}>
        <a href="#" className={socialLinkClassName}>
          <FaXTwitter />
        </a>
      </li>

      <li className={listClassName}>
        <a href="#" className={socialLinkClassName}>
          <RiPinterestLine />
        </a>
      </li>
    </>
  );
};

SocialLinks.propTypes = {
  footer: PropTypes.bool,
};
export default SocialLinks;
