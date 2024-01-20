import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";

const ActionButtons = () => {
  return (
    <div className="showcase-actions">
      <button className="btn-action">
        <CiHeart />
      </button>

      <button className="btn-action">
        <IoEyeOutline />
      </button>

      <button className="btn-action">
        <GiShoppingCart />
      </button>
    </div>
  );
};

export default ActionButtons;
