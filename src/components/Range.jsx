import { useDispatch, useSelector } from "react-redux";
import { updatePasswordLength } from "../store/passwordSlice";

const Range = () => {
  const dispatch = useDispatch();
  const passLength = useSelector((state) => state.passwordLength);
  const minPassLength = 4,
    maxPassLength = 60;
  return (
    <div className="space-y-3">
      <span className=" block text-zinc-800 dark:text-zinc-300">
        Use the slider, and select from the options, below, to lengthen your
        password and strengthen your security. Password Length (
        <span className="text-fuchsia-500">{passLength}</span>-60)
      </span>
      <div className="flex items-center space-x-1">
        <input
          max={maxPassLength}
          min={minPassLength}
          value={passLength}
          step={1}
          type="number"
          className={`w-18 p-2 bg-transparent text-zinc-800 rounded border border-zinc-700 outline-none overflow-hidden dark:text-zinc-300`}
          onInput={(event) => {
            event.target.value > 3 && event.target.value < 61
              ? dispatch(updatePasswordLength(event.target.value))
              : "";
          }}
        />
        <input
          type="range"
          className="w-full h-2 bg-zinc-600 rounded-none cursor-pointer appearance-none accent-fuchsia-500"
          value={passLength}
          min={minPassLength}
          max={maxPassLength}
          id="slider"
          onChange={(event) =>
            dispatch(updatePasswordLength(event.target.value))
          }
        />
      </div>
    </div>
  );
};

export default Range;
