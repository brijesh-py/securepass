import {
  Navbar,
  Header,
  Display,
  Generate,
  History,
  Footer,
} from "./components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-fuchsia-50 select-none dark:bg-zinc-950">
        <div className="w-full p-2 sm:w-[90%] md:w-[70%] mx-auto">
          <Header />
          <Display />
          <Generate />
          <History />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
