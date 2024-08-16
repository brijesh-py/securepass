import { createSlice } from "@reduxjs/toolkit";

import {
  handleCheckboxToggle,
  handleSavePassword,
  handleRemovePassword,
  handleToggleMailModal,
} from "./actions";

import { handlePasswords, handleE2RPasswords } from "./passwordGenerators";

import { fetchSavedPasswords } from "./utils";

const initialState = {
  password: [],
  tempPassword: "",
  customCharacters: "h4ck3r",
  passwordLength: 16,
  includeLowerCase: true,
  includeMixCase: true,
  includeNumbers: true,
  includeSpecialCharacters: false,
  useCustomCharacters: false,
  includeAmbiguousCharacters: false,
  useE2RAlgorithm: false,
  savePassword: false,
  generateBulkPasswords: false,
  sendPasswordByEmail: false,
  bulkPasswords: [],
  passwordHistory: fetchSavedPasswords() || [],
};

const handleUpdatePasswordLength = (state, action) => {
  state.passwordLength = action.payload;
  if (state.useE2RAlgorithm) {
    handleE2RPasswords(state);
    return;
  }
  handlePasswords(state, action);
};

const handleUpdateCustomCharacters = (state, action) => {
  state.customCharacters = action.payload;
  handlePasswords(state, action);
};

const passwordSlice = createSlice({
  name: "secure_pass",
  initialState,
  reducers: {
    toggleCheckbox: handleCheckboxToggle,
    generatePassword: handlePasswords,
    savePassword: handleSavePassword,
    removePassword: handleRemovePassword,
    generateE2RPassword: handleE2RPasswords,
    toggleMailModal: handleToggleMailModal,
    updatePasswordLength: handleUpdatePasswordLength,
    updateCustomCharacters: handleUpdateCustomCharacters,
  },
});

export default passwordSlice.reducer;
export const {
  toggleCheckbox,
  generatePassword,
  updatePasswordLength,
  updateCustomCharacters,
  generateE2RPassword,
  savePassword,
  removePassword,
  toggleMailModal,
} = passwordSlice.actions;
