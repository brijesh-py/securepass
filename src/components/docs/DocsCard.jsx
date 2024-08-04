import PropTypes from "prop-types";

const DocsCard = ({ className = "", ...props }) => {
  return (
    <div
      className={`my-1 p-2 bg-transparent  sm:p-3  ${className} `}
      {...props}
    >
      {props.children}
    </div>
  );
};
DocsCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DocsCard;
