import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generatePassword, toggleCheckbox } from "../../store/passwordSlice";

const keyDown = (event, dispatch) => {
  const { key, ctrlKey } = event;

  if (ctrlKey) {
    dispatch(generatePassword());
    return;
  }

  switch (key.toLowerCase()) {
    case "l":
      dispatch(toggleCheckbox("includeLowerCase"));
      break;
    case "m":
      dispatch(toggleCheckbox("includeMixCase"));
      break;
    case "n":
      dispatch(toggleCheckbox("includeNumbers"));
      break;
    case "s":
      dispatch(toggleCheckbox("includeSpecialCharacters"));
      break;
    case "c":
      dispatch(toggleCheckbox("useCustomCharacters"));
      break;
    case "a":
      dispatch(toggleCheckbox("includeAmbiguousCharacters"));
      break;
    case "e":
      dispatch(toggleCheckbox("useE2RAlgorithm"));
      break;
    case "p":
      dispatch(toggleCheckbox("savePassword"));
      break;
      case "b":
        dispatch(toggleCheckbox("generateBulkPasswords"));
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
