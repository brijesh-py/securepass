export const sevenDaysMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export const handleExpiredPasswordTime = (state) => {
  state.passwordHistory = state.passwordHistory.filter(
    (pass) =>
      new Date(pass.generatedAt).getTime() >=
      new Date().getTime() - sevenDaysMilliseconds
  );
};

export const generatePasswordID = () => {
  return Math.floor(Math.random() * 100000000).toString(36);
};

export const generatePasswordTime = () => {
  return new Date().getTime();
};

export const generateBulkPasswords = (state, chars) => {
  let i = 1,
    holdPassword = "";
  for (i; i <= 4; i++) {
    for (let i = 1; i <= state.passwordLength; i++) {
      holdPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    state.bulkPasswords = [
      {
        id: generatePasswordID(),
        generatedAt: generatePasswordTime(),
        password: holdPassword,
      },
      ...state.bulkPasswords,
    ];
    holdPassword = "";
  }
};

export const generateNormalPasswords = (state, chars) => {
  let holdPassword = "";
  for (let i = 1; i <= state.passwordLength; i++) {
    holdPassword += chars[Math.floor(Math.random() * chars.length)];
  }
  state.password = {
    id: generatePasswordID(),
    generatedAt: generatePasswordTime(),
    password: holdPassword,
  };
};

export const generateE2RPasswords = (state) => {
  let holdPassword = "";
  const consonants = "bcdfghjklmnpqrstvwy",
    vowels = "aeiou";
  state.password = [];
  state.bulkPasswords = [];
  if (state.generateBulkPasswords) {
    for (let i = 1; i <= 4; i++) {
      holdPassword = "";
      for (let j = 1; j <= parseInt(state.passwordLength / 1.2); j++) {
        if (j % 4 === 0) {
          holdPassword += `${
            consonants[Math.floor(Math.random() * consonants.length)]
          }-`;
        }
        if (j % 2 === 0) {
          holdPassword +=
            consonants[Math.floor(Math.random() * consonants.length)];
        } else {
          holdPassword += vowels[Math.floor(Math.random() * vowels.length)];
        }
      }

      state.bulkPasswords = [
        {
          id: generatePasswordID(),
          generatedAt: generatePasswordTime(),
          password: holdPassword,
        },
        ...state.bulkPasswords,
      ];
    }
  } else {
    for (let i = 1; i <= parseInt(state.passwordLength/1.2 ); i++) {
      if (i % 4 === 0) {
        holdPassword += `${
          consonants[Math.floor(Math.random() * consonants.length)]
        }-`;
      }
      if (i % 2 === 0) {
        holdPassword +=
          consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        holdPassword += vowels[Math.floor(Math.random() * vowels.length)];
      }
    }

    state.password = {
      generatedAt: generatePasswordTime(),
      password: holdPassword,
    };
  }
};

export const handleGeneratePasswords = (state, chars) => {
  if (state.generateBulkPasswords) generateBulkPasswords(state, chars);
  else generateNormalPasswords(state, chars);
};

export const handleE2RPasswords = (state) => {
  generateE2RPasswords(state);
};

export const handlePasswords = (state) => {
  const {
    customCharacters,
    includeLowerCase,
    includeMixCase,
    includeNumbers,
    includeSpecialCharacters,
    useCustomCharacters,
    includeAmbiguousCharacters,
  } = state;

  const lowerChars = "abcdefghijkmnpqrstuvwxyz",
    mixChars = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    numbers = "23456789",
    specialChars = "@#$%()-_=+${}[]",
    ambiguousChars = "0oO1Il";

  let chars = includeLowerCase ? lowerChars : "";
  chars += includeMixCase ? mixChars : "";
  chars += includeNumbers ? numbers : "";
  chars += includeSpecialCharacters ? specialChars : "";
  chars += useCustomCharacters ? customCharacters : "";
  chars += includeAmbiguousCharacters ? ambiguousChars : "";
  state.bulkPasswords = [];
  state.password = [];
  handleExpiredPasswordTime(state);
  handleGeneratePasswords(state, chars);
};
