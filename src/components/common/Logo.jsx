import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SiKeycloak } from "react-icons/si";

const Logo = ({ className }) => {
  return (
    <Link
      to=""
      className={`flex items-center space-x-3 mx-auto w-fit ${className}`}
    >
      <span className="text-fuchsia-500 text-3xl">
        <SiKeycloak />
      </span>
      <span className=" text-slate-900 text-2xl capitalize logo-font dark:text-white">
        SecurePass
      </span>
    </Link>
  );
};
Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
