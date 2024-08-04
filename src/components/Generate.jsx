import { useDispatch, useSelector } from "react-redux";
import Card from "./common/Card";
import {
  generateE2RPassword,
  generatePassword,
  toggleCheckbox,
} from "../store/passwordSlice";
import Range from "./Range";
import Checkbox from "./checkbox/Checkbox";
import CustomChars from "./CustomChars";
import { useState } from "react";
import { IoRefresh } from "react-icons/io5";
import Button from "./common/Button";

const Generate = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const useE2RAlgorithm = useSelector((state) => state.useE2RAlgorithm);

  const generatePasswordHandler = () => {
    setLoading(true);
    const clear = setTimeout(() => {
      clearTimeout(clear);
      if (useE2RAlgorithm) dispatch(generateE2RPassword());
      else dispatch(generatePassword());
      setLoading(false);
    }, 100);
  };

  return (
    <>
      {selector.useCustomCharacters && (
        <Card className="flex items-center justify-between">
          <CustomChars />
        </Card>
      )}
      <div className="flex items-center space-x-2 my-3">
        <Button
          className=" flex items-center space-x-1"
          onClick={generatePasswordHandler}
          title="Press Ctrl key"
        >
          <span
            title="Press Ctrl key"
            data-tooltip-target="tooltip-default"
            id="loading"
            className={`text-white text-lg cursor-pointer ${
              loading ? "loading" : ""
            } dark:text-white`}
          >
            <IoRefresh />
          </span>
          <span className="capitalize">Generate Password</span>
        </Button>
      </div>
      <Card>
        <Range />
        {/* Checkbox */}
        <div className="flex flex-wrap items-center my-2">
          <Checkbox
            label="Lower Case"
            title="Press L key"
            toggle={selector.includeLowerCase}
            onClick={() => {
              dispatch(toggleCheckbox("includeLowerCase"));
            }}
          />
          <Checkbox
            label="Mix Case"
            title="Press M key"
            toggle={selector.includeMixCase}
            onClick={() => {
              dispatch(toggleCheckbox("includeMixCase"));
            }}
          />
          <Checkbox
            label="Numbers"
            title="Press N key"
            toggle={selector.includeNumbers}
            onClick={() => {
              dispatch(toggleCheckbox("includeNumbers"));
            }}
          />
          <Checkbox
            label="Special Chars"
            title="Press S key"
            toggle={selector.includeSpecialCharacters}
            onClick={() => {
              dispatch(toggleCheckbox("includeSpecialCharacters"));
            }}
          />
          <Checkbox
            label="Ambiguous Chars"
            title="Press A key"
            toggle={selector.includeAmbiguousCharacters}
            onClick={() => {
              dispatch(toggleCheckbox("includeAmbiguousCharacters"));
            }}
          />
          <Checkbox
            label="Custom"
            title="Press C key"
            toggle={selector.useCustomCharacters}
            onClick={() => {
              dispatch(toggleCheckbox("useCustomCharacters"));
            }}
          />
          <Checkbox
            label="E2R"
            title="Press E key"
            toggle={selector.useE2RAlgorithm}
            onClick={() => {
              dispatch(toggleCheckbox("useE2RAlgorithm"));
            }}
          />
          <Checkbox
            label="Save Password"
            title="Press P key"
            toggle={selector.savePassword}
            onClick={() => {
              dispatch(toggleCheckbox("savePassword"));
            }}
          />
          <Checkbox
            label="Bulk Passwords"
            title="Press B key"
            toggle={selector.generateBulkPasswords}
            onClick={() => {
              dispatch(toggleCheckbox("generateBulkPasswords"));
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default Generate;
