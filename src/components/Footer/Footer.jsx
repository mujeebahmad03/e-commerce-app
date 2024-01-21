import "./Footer.css";
import FooterCategory from "./FooterCategory";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <FooterCategory />
      <FooterNav />

      <div className="footer-bottom">
        <div className="container">
          <img
            src="images/payment.png"
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <a href="#">Martha Store</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
