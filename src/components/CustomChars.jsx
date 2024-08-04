import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomCharacters } from "../store/passwordSlice";
import Button from "./common/Button";

import { BsPinFill } from "react-icons/bs";

const CustomChars = () => {
  const [custom, setCustom] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={custom}
        className={`w-full text-slate-600 font-sans bg-transparent border-none outline-none selection:bg-fuchsia-600 selection:text-white dark:text-slate-300`}
        onChange={(event) => setCustom(event.target.value)}
        placeholder="Type custom characters"
      />
      <Button
        disabled={custom.length < 2 ? true : false}
        className="disabled:cursor-not-allowed disabled:bg-slate-400"
        onClick={() => {
          dispatch(updateCustomCharacters(custom));
        }}
      >
        <BsPinFill />
      </Button>
    </>
  );
};

export default CustomChars;
