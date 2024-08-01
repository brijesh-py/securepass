import { useDispatch, useSelector } from "react-redux";
import Card from "./common/Card";
import { includes } from "../store/passwordSlice";
import Range from "./Range";
import Checkbox from "./Checkbox";
import CustomChars from "./CustomChars";
import useAccessibility from "./hooks/useAccessibility";

const Generate = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  useAccessibility();
  return (
    <>
      {selector.isCustomChars && (
        <Card className="flex items-center justify-between">
          <CustomChars />
        </Card>
      )}
      <Card>
        <Range />
        {/* Checkbox */}
        <div className="flex flex-wrap items-center my-2">
          <Checkbox
            label="Lower Case"
            title="Press L key"
            toggle={selector.isLowerCase}
            onClick={() => {
              dispatch(includes("isLowerCase"));
            }}
          />
          <Checkbox
            label="Mix Case"
            title="Press M key"
            toggle={selector.isMixCase}
            onClick={() => {
              dispatch(includes("isMixCase"));
            }}
          />
          <Checkbox
            label="Numbers"
            title="Press N key"
            toggle={selector.isNumbers}
            onClick={() => {
              dispatch(includes("isNumbers"));
            }}
          />
          <Checkbox
            label="Special Chars"
            title="Press S key"
            toggle={selector.isSpecialChars}
            onClick={() => {
              dispatch(includes("isSpecialChars"));
            }}
          />
          <Checkbox
            label="Ambiguous Chars"
            title="Press A key"
            toggle={selector.isAmbiguousChars}
            onClick={() => {
              dispatch(includes("isAmbiguousChars"));
            }}
          />
          <Checkbox
            label="Custom"
            title="Press C key"
            toggle={selector.isCustomChars}
            onClick={() => {
              dispatch(includes("isCustomChars"));
            }}
          />
          <Checkbox
            label="E2R"
            title="Press E key"
            toggle={selector.isE2R}
            onClick={() => {
              dispatch(includes("isE2R"));
            }}
          />
          <Checkbox
            label="Save Password"
            title="Press P key"
            toggle={selector.isSavePassword}
            onClick={() => {
              dispatch(includes("isSavePassword"));
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default Generate;
