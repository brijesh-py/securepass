import { SiKeycloak } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="" className="flex items-center space-x-3 mx-auto w-fit ">
      <span className="text-fuchsia-500 text-3xl">
        <SiKeycloak />
      </span>
      <span className=" text-slate-900 text-2xl capitalize logo-font dark:text-white">
        SecurePass
      </span>
    </Link>
  );
};

export default Logo;
