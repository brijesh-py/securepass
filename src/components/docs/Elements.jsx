import PropTypes from "prop-types";
const H1 = ({ className, children }) => {
  return (
    <h1 className={`mt-2 mb-4 text-3xl font-bold text-zinc-800 dark:text-white ${className}`}>
      {children}
    </h1>
  );
};
H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const H2 = ({ className, children }) => {
  return (
    <h2
      className={`mt-3 mb-2 text-2xl font-bold text-zinc-800 dark:text-zinc-300 ${className}`}
    >
      {children}
    </h2>
  );
};
H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const H3 = ({ className, children }) => {
  return (
    <h3 className={`mt-3 mb-4 text-xl text-zinc-800  dark:text-zinc-300 ${className}`}>
      {children}
    </h3>
  );
};
H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const P = ({ className, children }) => {
  return (
    <p className={`leading-7 text-zinc-700 dark:text-zinc-400 ${className}`}>{children}</p>
  );
};

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Strong = ({ className, children }) => {
  return (
    <strong className={` text-zinc-700 dark:text-zinc-400 ${className}`}>{children}</strong>
  );
};

Strong.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const UL = ({ className, children }) => {
  return (
    <ul className={`space-y-2 list-disc pl-4  text-zinc-700 dark:text-zinc-400 ${className}`}>{children}</ul>
  );
};

UL.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export { H1, H2, H3, P, Strong, UL };
