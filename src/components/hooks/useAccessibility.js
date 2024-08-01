import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generatePassword, includes } from "../../store/passwordSlice";

const keyDown = (event, dispatch) => {
  const { key, ctrlKey } = event;

  if (ctrlKey) {
    dispatch(generatePassword());
    return;
  }

  switch (key.toLowerCase()) {
    case "l":
      dispatch(includes("isLowerCase"));
      break;
    case "m":
      dispatch(includes("isMixCase"));
      break;
    case "n":
      dispatch(includes("isNumbers"));
      break;
    case "s":
      dispatch(includes("isSpecialChars"));
      break;
    case "c":
      dispatch(includes("isCustomChars"));
      break;
    case "a":
      dispatch(includes("isAmbiguousChars"));
      break;
    case "e":
      dispatch(includes("isE2R"));
      break;
    case "p":
      dispatch(includes("isSavePassword"));
      break;
    default:
      break;
  }
};

const useAccessibility = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const keyDownListener = (event) => {
      if (
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
      ) {
        keyDown(event, dispatch);
      }
    };
    window.addEventListener("keydown", keyDownListener);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", keyDownListener);
    };
  }, [dispatch]);
};

export default useAccessibility;
