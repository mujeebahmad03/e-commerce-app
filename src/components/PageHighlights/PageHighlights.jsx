import CallToAction from "../CallToAction/CallToAction";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import "./PageHighlights.css";
const PageHighlights = () => {
  return (
    <div className="container">
      <div className="page-highlights">
        <Testimonials />
        <CallToAction />
        <OurServices />
      </div>
    </div>
  );
};

export default PageHighlights;
