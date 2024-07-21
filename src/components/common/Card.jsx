const Card = ({ className = "", ...props }) => {
  return (
    <div
      className={`my-2 p-2 bg-transparent border border-zinc-300 rounded shadow sm:p-3 md:p-4 dark:bg-zinc-900 dark:border-zinc-700 ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Card;
