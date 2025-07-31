module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    semi: ["error", "always"],
    "react/prop-types": "off",
  },
};
