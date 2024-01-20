import { testimonialsData } from "../../data/menuItems";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonial">
      <h2 className="title">testimonial</h2>
      <div className="wrapper has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
