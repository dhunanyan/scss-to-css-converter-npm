module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "no-console": ["warn", { allow: ["info", "error"] }],
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
};
