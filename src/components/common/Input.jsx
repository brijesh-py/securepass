import { forwardRef, useId } from "react";
import PropTypes from "prop-types";

const Input = ({ label, type = "text", className, ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-400"
        >
          {label} {props.required && <b className="text-red-600">*</b>}
        </label>
      )}
      <input
        autoComplete="off"
        type={type}
        id={id}
        className={`mt-1 block w-full px-4 py-2 text-zinc-800  border border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 dark:text-zinc-400 dark:bg-zinc-900  ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default forwardRef(Input);
