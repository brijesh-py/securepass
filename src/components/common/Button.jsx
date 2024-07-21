const Button = ({ type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`whitespace-nowrap p-2 text-white text-sm uppercase font-bold bg-fuchsia-600 rounded hover:bg-fuchsia-300 focus:ring-1 ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
