import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

const FooterContactItem = () => (
  <>
    <li className="footer-nav-item flex">
      <div className="icon-box">
        <IoLocationOutline />
      </div>

      <address className="content">
        419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
      </address>
    </li>

    <li className="footer-nav-item flex">
      <div className="icon-box">
        <IoCallOutline />
      </div>

      <a href="tel:+607936-8058" className="footer-nav-link">
        (607) 936-8058
      </a>
    </li>

    <li className="footer-nav-item flex">
      <div className="icon-box">
        <IoMailOutline />
      </div>

      <a href="mailto:example@gmail.com" className="footer-nav-link">
        example@gmail.com
      </a>
    </li>
  </>
);

export default FooterContactItem;
