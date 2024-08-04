import { handleE2RPasswords } from "./passwordGenerators";
import {
  handleEncryptPassword,
  handleDecryptPassword,
  savePasswords,
} from "./utils";

import {
  generatePasswordID,
  handlePasswords,
  generatePasswordTime,
} from "./passwordGenerators";

const atLeastOneChecked = (fields) => {
  const errors = [];
  for (const [field, value] of Object.entries(fields)) {
    if (!value) {
      errors.push(field);
    }
  }
  return errors;
};

export const handleCheckboxToggle = (state, action) => {
  const requiredOne = {
    includeLowerCase: state.includeLowerCase,
    includeMixCase: state.includeMixCase,
    includeNumbers: state.includeNumbers,
    includeSpecialCharacters: state.includeSpecialCharacters,
    useCustomCharacters: state.useCustomCharacters,
    useE2RAlgorithm: state.useE2RAlgorithm,
  };

  const check = atLeastOneChecked(requiredOne);
  if (
    check.length === 5 &&
    !check.includes(action.payload) &&
    !action.payload.includes("savePassword") &&
    !action.payload.includes("includeAmbiguousCharacters") &&
    !action.payload.includes("generateBulkPasswords")
  )
    return;

  switch (action.payload) {
    case "includeLowerCase":
      state.includeLowerCase = !state.includeLowerCase;
      break;
    case "includeMixCase":
      state.includeMixCase = !state.includeMixCase;
      break;
    case "includeNumbers":
      state.includeNumbers = !state.includeNumbers;
      break;
    case "includeSpecialCharacters":
      state.includeSpecialCharacters = !state.includeSpecialCharacters;
      break;
    case "includeAmbiguousCharacters":
      state.includeAmbiguousCharacters = !state.includeAmbiguousCharacters;
      break;
    case "useE2RAlgorithm":
      state.useE2RAlgorithm = !state.useE2RAlgorithm;
      break;
    case "generateBulkPasswords":
      state.generateBulkPasswords = !state.generateBulkPasswords;
      break;
    case "useCustomCharacters":
      state.useCustomCharacters = !state.useCustomCharacters;
      break;
    case "savePassword":
      state.savePassword = !state.savePassword;
      return;
    default:
      return;
  }
 
  if (state.useE2RAlgorithm) handleE2RPasswords(state);
  else handlePasswords(state);
};

export const handleSavePassword = (state, action) => {
  if (!state.savePassword) return;

  const passwordFind = state.passwordHistory.find(
    (password) => handleDecryptPassword(password.password) === action.payload
  );

  if (passwordFind === undefined) {
    if (state.passwordHistory.length >= 10) {
      state.passwordHistory.pop();
    }

    state.passwordHistory = [
      {
        id: generatePasswordID(),
        generatedAt: generatePasswordTime(),
        password: handleEncryptPassword(action.payload),
      },
      ...state.passwordHistory,
    ];

    savePasswords(state.passwordHistory);
  }
};

export const handleRemovePassword = (state, action) => {
  state.passwordHistory = state.passwordHistory.filter(
    (password) => password.id !== action.payload
  );
  savePasswords(state.passwordHistory);
};

export const handleToggleMailModal = (state, action) => {
  if (!state.isSendPassword) {
    state.tempPassword = action.payload;
  }
  state.isSendPassword = !state.isSendPassword;
};
