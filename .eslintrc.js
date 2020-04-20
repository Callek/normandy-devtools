module.exports = {
  env: {
    jest: true,
    webextensions: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:mozilla/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "mozilla",
  ],
  rules: {
    "mozilla/no-define-cc-etc": "off",
    "prefer-const": "error",
  },
};
