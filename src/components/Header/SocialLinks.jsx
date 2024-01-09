import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
const SocialLinks = () => {
  return (
    <>
      <li>
        <a href="#" className="social-link">
          <MdOutlineFacebook />
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <FaInstagram />
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <FaXTwitter />
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <RiPinterestLine />
        </a>
      </li>
    </>
  );
};

export default SocialLinks;
