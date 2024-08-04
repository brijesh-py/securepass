import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { savePassword, toggleMailModal } from "../store/passwordSlice";
import Card from "./common/Card";
import Button from "./common/Button";

import { IoCopy } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";

const Display = ({ bulkPassword }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const isSavePassword = useSelector((state) => state.savePassword);
  const generateBulkPasswords = useSelector(
    (state) => state.generateBulkPasswords
  );
  const password = useSelector((state) =>
    generateBulkPasswords ? bulkPassword : state.password
  );
  const passwordLength = useSelector((state) => state.passwordLength);

  const passwordLengthStatus = () => {
    if (passwordLength < 8) return "border-b-red-400 dark:border-b-red-400";
    else if (passwordLength < 15)
      return "border-b-yellow-400 dark:border-b-yellow-400 ";
    else return "border-b-green-500 dark:border-b-green-500";
  };

  const clipboardPassword = () => {
    ref?.current.select();
    navigator.clipboard?.writeText(password.password) ||
      document.execCommand("copy");
    dispatch(savePassword(password.password));
    if (isSavePassword)
      toast.success("Copied to clipboard and saved to History");
    else toast.success("Copied to clipboard");
  };

  return (
    <>
      <Card className={`border-b-8 ${passwordLengthStatus()}`}>
        <div className="flex items-center justify-between space-x-2">
          <input
            type="text"
            className={`w-full text-zinc-950 text-lg font-mono bg-transparent border-none outline-none select-none cursor-not-allowed selection:bg-fuchsia-600 selection:text-white md:text-xl dark:text-white`}
            placeholder="Password"
            ref={ref}
            value={password.password || ""}
            onChange={() => {}}
            readOnly
          />
          <Button onClick={() => dispatch(toggleMailModal(password.password))}>
            <BiMailSend className="text-lg" />
          </Button>
          <Button onClick={clipboardPassword}>
            <IoCopy className="text-lg" />
          </Button>
        </div>
      </Card>
    </>
  );
};

Display.propTypes = {
  bulkPassword: PropTypes.object,
};
export default Display;
