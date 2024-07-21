import { useDispatch, useSelector } from "react-redux";
import Card from "./common/Card";
import { includes } from "../store/control";
import Range from "./Range";
import Checkbox from "./Checkbox";
import CustomChars from "./CustomChars";

const Generate = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

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
            toggle={selector.isLowerCase}
            onClick={() => {
              dispatch(includes("isLowerCase"));
            }}
          />
          <Checkbox
            label="Mix Case"
            toggle={selector.isMixCase}
            onClick={() => {
              dispatch(includes("isMixCase"));
            }}
          />
          <Checkbox
            label="Numbers"
            toggle={selector.isNumbers}
            onClick={() => {
              dispatch(includes("isNumbers"));
            }}
          />
          <Checkbox
            label="Special Chars"
            toggle={selector.isSpecialChars}
            onClick={() => {
              dispatch(includes("isSpecialChars"));
            }}
          />
          <Checkbox
            label="Ambiguous Chars"
            toggle={selector.isAmbiguousChars}
            onClick={() => {
              dispatch(includes("isAmbiguousChars"));
            }}
          />
          <Checkbox
            label="Custom"
            toggle={selector.isCustomChars}
            onClick={() => {
              dispatch(includes("isCustomChars"));
            }}
          />
          <Checkbox
            label="E2R"
            toggle={selector.isE2R}
            onClick={() => {
              dispatch(includes("isE2R"));
            }}
          />
          <Checkbox
            label="Save Password"
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
