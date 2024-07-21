import { useRef } from "react";
import { useDispatch } from "react-redux";
import { removePassword } from "../../store/control";

import { IoCopy } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const Password = ({ password }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const clipboardPassword = () => {
    ref?.current.select();
    navigator.clipboard?.writeText(password) || document.execCommand("copy");
  };

  return (
    <div className="flex items-center justify-between space-x-2 my-1 p-2 bg-fuchsia-50 border border-zinc-300 rounded shadow hover:bg-fuchsia-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 dark:border-zinc-700">
      <input
        type="text"
        className={`w-full text-zinc-800 text-sm  font-mono bg-transparent border-none outline-none select-none text-ellipsis overflow-hidden cursor-not-allowed selection:bg-fuchsia-600 selection:text-white dark:text-zinc-400 md:text-md`}
        ref={ref}
        value={password}
        readOnly
      />
      <div className="flex items-center space-x-2 text-gray-600 dark:text-zinc-400">
        <span
          className="p-2 text-md rounded-full cursor-pointer hover:bg-fuchsia-200 text-fuchsia-500"
          onClick={clipboardPassword}
        >
          <IoCopy />
        </span>
        <span
          className="p-2 text-lg rounded-full cursor-pointer hover:bg-pink-200 text-pink-500"
          onClick={() => {
            dispatch(removePassword(password));
          }}
        >
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default Password;
