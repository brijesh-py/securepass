import { useDispatch, useSelector } from "react-redux";
import { passwordLength } from "../store/passwordSlice";

const Range = () => {
  const dispatch = useDispatch();
  const passLength = useSelector((state) => state.passwordLength);
  return (
    <div className="space-y-3">
      <span className=" block text-zinc-800 dark:text-zinc-300">
        Use the slider, and select from the options, below, to lengthen your
        password and strengthen your security. Password Length (
        <span className="text-fuchsia-500">{passLength}</span>-60)
      </span>
        <input
          type="range"
          className="w-full h-2 bg-zinc-600 rounded-none cursor-pointer appearance-none accent-fuchsia-500"
          value={passLength}
          min={4}
          max={60}
          id="slider"
          onChange={(event) => dispatch(passwordLength(event.target.value))}
        />
    </div>
  );
};

export default Range;
