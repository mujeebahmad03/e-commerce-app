import FooterNavList from "./FooterNavList";

const FooterNav = () => {
  const categories = [
    { label: "Men's Clothing", url: "#" },
    { label: "Women's Clothing", url: "#" },
    { label: "Shoes", url: "#" },
    { label: "Jewelry", url: "#" },
    { label: "Bath & Body", url: "#" },
  ];

  const companyInfo = [
    { label: "Delivery", url: "#" },
    { label: "Legal Notice", url: "#" },
    { label: "Terms and conditions", url: "#" },
    { label: "About us", url: "#" },
    { label: "Secure payment", url: "#" },
  ];

  const services = [
    { label: "Prices drop", url: "#" },
    { label: "New products", url: "#" },
    { label: "Best sales", url: "#" },
    { label: "Contact us", url: "#" },
    { label: "Sitemap", url: "#" },
  ];

  return (
    <div className="footer-nav">
      <div className="container">
        <FooterNavList title="Popular Category" items={categories} />

        <FooterNavList title="Our company" items={companyInfo} />

        <FooterNavList title="Services" items={services} />

        <FooterNavList title="Contact" navItem="contact" />

        <FooterNavList title="Follow us" navItem="socials" />
      </div>
    </div>
  );
};

export default FooterNav;
