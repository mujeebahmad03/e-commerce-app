import PropTypes from "prop-types";
import "./Testimonials.css";

const TestimonialCard = ({ imageSrc, name, title, quote }) => {
  return (
    <div className="testimonial-card">
      <img
        src={imageSrc}
        alt={name}
        className="testimonial-banner"
        width="80"
        height="80"
      />

      <p className="testimonial-name">{name}</p>

      <p className="testimonial-title">{title}</p>

      <img
        src="images/icons/quotes.svg"
        alt="quotation"
        className="quotation-img"
        width="26"
      />

      <p className="testimonial-desc">{quote}</p>
    </div>
  );
};

TestimonialCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default TestimonialCard;
