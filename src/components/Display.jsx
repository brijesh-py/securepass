import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePassword, savePasswords, e2RPassword } from "../store/passwordSlice";
import Card from "./common/Card";
import Button from "./common/Button";

import { IoCopy, IoRefresh } from "react-icons/io5";

const Display = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password);
  const e2R = useSelector((state) => state.isE2R);
  const passwordLength = useSelector((state) => state.passwordLength);
  const [loading, setLoading] = useState(false);

  const passwordLengthStatus = () => {
    if (passwordLength < 12) return "text-red-500 dark:text-red-400";
    else if (passwordLength < 18) return "text-yellow-500 dark:text-yellow-400";
    else return "text-green-500 dark:text-green-400";
  };

  const clipboardPassword = () => {
    ref?.current.select();
    navigator.clipboard?.writeText(password) || document.execCommand("copy");
    dispatch(savePasswords(password));
  };

  const generatePasswordHandler = () => {
    setLoading(true);
    const clear = setTimeout(() => {
      clearTimeout(clear);
      if (e2R) dispatch(e2RPassword());
      else dispatch(generatePassword());
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    dispatch(generatePassword());
  }, []);

  return (
    <Card>
      <div className="flex items-center justify-between space-x-2">
        <input
          type="text"
          className={`w-full ${passwordLengthStatus()}  text-lg font-mono bg-transparent border-none outline-none select-none cursor-not-allowed selection:bg-fuchsia-600 selection:text-white md:text-xl`}
          placeholder="Password"
          ref={ref}
          value={password}
          onChange={() => {}}
          readOnly
        />

        <span
        title="Press Ctrl key"
          data-tooltip-target="tooltip-default"
          id="loading"
          className={`text-slate-600 text-2xl cursor-pointer ${
            loading ? "loading" : ""
          } dark:text-white`}
          onClick={generatePasswordHandler}
        >
          <IoRefresh />
        </span>
        <Button onClick={clipboardPassword}>
          <IoCopy />
        </Button>
      </div>
    </Card>
  );
};
export default Display;
