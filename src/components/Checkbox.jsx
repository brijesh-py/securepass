import PropTypes from "prop-types";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const CheckBox = ({ label, toggle, ...props }) => {
  return (
    <>
      <div
        className="flex items-center space-x-2 mx-2 my-1 cursor-pointer select-none"
        {...props}
      >
        <span className="text-fuchsia-600 text-2xl ">
          {toggle ? <FaCheckSquare /> : <MdCheckBoxOutlineBlank />}
        </span>
        <span className=" text-zinc-800 whitespace-nowrap dark:text-zinc-300">
          {label}
        </span>
      </div>
    </>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default CheckBox;
