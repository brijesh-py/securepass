import CryptoJs from "crypto-js";
import conf from "../conf";

export const handleEncryptPassword = (password) => {
  try {
    return CryptoJs.AES.encrypt(password, conf.jwtSecretKey).toString();
  } catch (error) {
    return error.message || error.text || error;
  }
};

export const handleDecryptPassword = (encryptedPassword) => {
  try {
    return CryptoJs.AES.decrypt(encryptedPassword, conf.jwtSecretKey).toString(
      CryptoJs.enc.Utf8
    );
  } catch (error) {
    return error.message || error.text || error;
  }
};

export const savePasswords = (passwords) => {
  try {
    localStorage.setItem("encrypted_passwords", JSON.stringify(passwords));
  } catch (error) {
    console.error("Failed to save password " + error);
  }
};

export const fetchSavedPasswords = () => {
  try {
    const passwords = JSON.parse(localStorage.getItem("encrypted_passwords"));
    if (passwords) return passwords;
    return [];
  } catch (error) {
    console.error("Couldn't get passwords from local storage", error);
    return [];
  }
};
