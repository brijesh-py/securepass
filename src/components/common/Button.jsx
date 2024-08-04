import PropTypes from "prop-types";

const Button = ({ type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`whitespace-nowrap p-2 text-white text-sm uppercase font-bold bg-fuchsia-600 rounded hover:bg-fuchsia-300 focus:ring-1 active:bg-fuchsia-700 ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
