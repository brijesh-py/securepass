import { Outlet } from "react-router-dom";
import { Navbar, Footer, SendPassword } from "./components";
import { useSelector } from "react-redux";

const Layout = () => {
  const isSendPassword = useSelector((state) => state.isSendPassword);
  return (
    <>
      {isSendPassword && <SendPassword />}
      <Navbar />
      <main className="w-full bg-fuchsia-50 select-none dark:bg-zinc-950">
        <div className="w-full p-2 sm:w-[90%] md:w-[70%] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
