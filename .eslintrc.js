module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "off",
    "react/prop-types": [2, { skipUndeclared: true }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": "error",
  },
};
