import PropTypes from "prop-types";

const Card = ({ className = "", ...props }) => {
  return (
    <div
      className={`my-2 p-2 bg-transparent border border-zinc-300 rounded shadow sm:p-3 md:p-4  hover:bg-fuchsia-100 dark:hover:bg-zinc-950  dark:bg-zinc-900 dark:border-zinc-700 ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
};
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
