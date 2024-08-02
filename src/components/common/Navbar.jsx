import Logo from "./Logo";
import { FaSquareGithub } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-300 shadow select-none dark:bg-zinc-950 dark:border-zinc-700">
      <div className="w-full mx-auto md:w-[80%]">
        <div className="flex items-center justify-between p-4">
          <div>
            <Logo />
          </div>
          <a href="https://github.com/brijesh-py" title="github.com/brijesh-py" target="_blank" className="flex items-center space-x-1 cursor-pointer">
            <FaSquareGithub className="text-3xl text-fuchsia-500 " />
            <span className=" text-slate-900 capitalize dark:text-white">Github</span> 
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
