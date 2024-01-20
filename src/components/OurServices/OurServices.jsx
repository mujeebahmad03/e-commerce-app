import {
  IoArrowUndoOutline,
  IoBoatOutline,
  IoCallOutline,
  IoRocketOutline,
  IoTicketOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";
import "./OurServices.css";

const ServiceItem = ({ icon, title, description }) => (
  <a href="#" className="service-item">
    <div className="service-icon">{icon}</div>

    <div className="service-content">
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  </a>
);

const OurServices = () => {
  const servicesData = [
    {
      icon: <IoBoatOutline />,
      title: "Worldwide Delivery",
      description: "For Order Over $100",
    },
    {
      icon: <IoRocketOutline />,
      title: "Next Day delivery",
      description: "UK Orders Only",
    },
    {
      icon: <IoCallOutline />,
      title: "Best Online Support",
      description: "Hours: 8AM - 11PM",
    },
    {
      icon: <IoArrowUndoOutline />,
      title: "Return Policy",
      description: "Easy & Free Return",
    },
    {
      icon: <IoTicketOutline />,
      title: "30% money back",
      description: "For Order Over $100",
    },
  ];

  return (
    <div className="service">
      <h2 className="title">Our Services</h2>

      <div className="service-container">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default OurServices;
