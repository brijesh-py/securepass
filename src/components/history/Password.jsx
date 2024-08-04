import { useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { removePassword } from "../../store/passwordSlice";
import { handleDecryptPassword } from "../../store/utils";

import { IoCopy } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const Password = ({ password, generatedAt, id }) => {
  password = handleDecryptPassword(password);
  const ref = useRef();
  const dispatch = useDispatch();
  const sevenDaysMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  const clipboardPassword = () => {
    ref?.current.select();
    navigator.clipboard?.writeText(password) || document.execCommand("copy");
    toast.success("Copied to clipboard");
  };

  return (
    <div
      className="flex items-center justify-between space-x-2 my-1 p-2 bg-fuchsia-50 border border-zinc-300 rounded shadow hover:bg-fuchsia-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 dark:border-zinc-700"
      title={`Expire On - ${new Date(
        generatedAt + sevenDaysMilliseconds
      ).toDateString()}`}
    >
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
            dispatch(removePassword(id));
            toast.success("Deleted password");
          }}
        >
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  generatedAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Password;
