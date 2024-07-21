import Logo from "./Logo";
const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center mt-5 w-full bg-white border-t border-slate-300 shadow select-none dark:bg-zinc-950 dark:border-zinc-700">
        <div className="mx-auto p-4 w-fit">
          <Logo />
          <div className="mt-3 text-zinc-500 text-center ">
            <span>Copyright © 2024 SecurePass</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
