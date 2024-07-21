import { createSlice } from "@reduxjs/toolkit";

const savePasswordsHandler = (passwords) => {
  try {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  } catch (error) {
    console.error("Failed to save password " + error);
  }
};

const getPasswordsHandler = () => {
  try {
    const passwords = JSON.parse(localStorage.getItem("passwords"));
    if (passwords) return passwords;
    return [];
  } catch (error) {
    console.error("Couldn't get passwords from local storage", error);
    return [];
  }
};

const initialState = {
  password: "",
  customChars: "h4ck3r",
  passwordLength: 12,
  isLowerCase: true,
  isMixCase: true,
  isNumbers: true,
  isSpecialChars: false,
  isCustomChars: false,
  isAmbiguousChars: false,
  isE2R: false,
  isSavePassword: false,
  passwordHistory: getPasswordsHandler(),
};

const passGenerate = (state, chars) => {
  let holdPassword = "";
  for (let i = 1; i <= state.passwordLength; i++) {
    holdPassword += chars[Math.floor(Math.random() * chars.length)];
  }
  state.password = holdPassword;
};

const e2RPasswordHandler = (state) => {
  const consonants = "bcdfghjklmnpqrstvwy",
    vowels = "aeiou";
  let holdPassword = "";
  for (let i = 1; i <= state.passwordLength; i++) {
    if (i % 2 == 0) {
      holdPassword += consonants[Math.floor(Math.random() * consonants.length)];
    } else {
      holdPassword += vowels[Math.floor(Math.random() * vowels.length)];
    }
  }
  state.password = holdPassword;
};

const generatePasswordHandler = (state) => {
  const {
    customChars,
    isLowerCase,
    isMixCase,
    isNumbers,
    isSpecialChars,
    isCustomChars,
    isAmbiguousChars,
  } = state;

  const lowerChars = "abcdefghijkmnpqrstuvwxyz",
    mixChars = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    numbers = "23456789",
    specialChars = "@#$%()-_=+${}[]",
    ambiguousChars = "0oO1Il";

  let chars = isLowerCase ? lowerChars : "";
  chars += isMixCase ? mixChars : "";
  chars += isNumbers ? numbers : "";
  chars += isSpecialChars ? specialChars : "";
  chars += isCustomChars ? customChars : "";
  chars += isAmbiguousChars ? ambiguousChars : "";

  passGenerate(state, chars);
};

const atLeastOneChecked = (fields) => {
  const errors = [];
  for (const [field, value] of Object.entries(fields)) {
    if (!value) {
      errors.push(field);
    }
  }
  return errors;
};

const includesCheckbox = (state, action) => {
  const requiredOne = {
    isLowerCase: state.isLowerCase,
    isMixCase: state.isMixCase,
    isNumbers: state.isNumbers,
    isSpecialChars: state.isSpecialChars,
    isCustomChars: state.isCustomChars,
    isE2R: state.isE2R,
  };
  const check = atLeastOneChecked(requiredOne);
  if (
    check.length == 5 &&
    !check.includes(action.payload) &&
    !action.payload.includes("isSavePassword") &&
    !action.payload.includes("isAmbiguousChars")
  )
    return;

  switch (action.payload) {
    case "isLowerCase":
      state.isLowerCase = !state.isLowerCase;
      break;
    case "isMixCase":
      state.isMixCase = !state.isMixCase;
      break;
    case "isNumbers":
      state.isNumbers = !state.isNumbers;
      break;
    case "isSpecialChars":
      state.isSpecialChars = !state.isSpecialChars;
      break;
    case "isCustomChars":
      state.isCustomChars = !state.isCustomChars;
      return;
    case "isAmbiguousChars":
      state.isAmbiguousChars = !state.isAmbiguousChars;
      break;
    case "isSavePassword":
      state.isSavePassword = !state.isSavePassword;
      return;
    case "isE2R":
      state.isE2R = !state.isE2R;
      break;
    default:
      return;
  }
  if (state.isE2R) e2RPasswordHandler(state);
  else generatePasswordHandler(state);
};

const slice = createSlice({
  name: "secure_pass",
  initialState,
  reducers: {
    includes: includesCheckbox,
    generatePassword: generatePasswordHandler,
    passwordLength: (state, action) => {
      state.passwordLength = action.payload;
      if (state.isE2R) {
        e2RPasswordHandler(state);
        return;
      }
      generatePasswordHandler(state, action);
    },
    savePasswords: (state, action) => {
      if (!state.isSavePassword) return;
      const passwordIndex = state.passwordHistory.indexOf(action.payload);
      if (passwordIndex < 0) {
        if (state.passwordHistory.length >= 10) {
          state.passwordHistory.pop();
        }
        state.passwordHistory = [action.payload, ...state.passwordHistory];
        savePasswordsHandler(state.passwordHistory);
      }
    },
    removePassword: (state, action) => {
      state.passwordHistory = state.passwordHistory.filter(
        (password) => password !== action.payload
      );
      savePasswordsHandler(state.passwordHistory);
    },
    customChars: (state, action) => {
      state.customChars = action.payload;
      generatePasswordHandler(state, action);
    },
    e2RPassword: e2RPasswordHandler,
  },
});

export default slice.reducer;
export const {
  includes,
  generatePassword,
  passwordLength,
  savePasswords,
  removePassword,
  customChars,
  e2RPassword,
} = slice.actions;
