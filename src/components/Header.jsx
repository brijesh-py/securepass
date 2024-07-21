const Header = () => {
  return (
    <header className="my-5 p-2">
      <div className=" text-center space-y-1 mx-auto">
        <h1 className="text-zinc-900 text-3xl font-extrabold md:text-4xl dark:text-white">
          Create strong passwords with SecurePass
        </h1>
        <h3 className="text-zinc-600 text-lg md:text-xl dark:text-zinc-400">
          Protect Your Online Accounts with{" "}
          <code className="font-mono font-medium text-fuchsia-500">
            Unbreakable Passwords
          </code>
        </h3>
        <h3 className="text-zinc-600 text-lg md:text-xl dark:text-zinc-400">
          Generate Unique Passwords with a Single Click
        </h3>
      </div>
    </header>
  );
};

export default Header;
