import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-300 shadow select-none dark:bg-zinc-950 dark:border-zinc-700">
      <div className="w-full mx-auto md:w-[80%]">
        <div className="flex items-center justify-between p-4 w-fit">
          <Logo />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
