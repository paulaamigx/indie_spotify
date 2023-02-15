module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "unused-imports"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "off",
    "semi": [2, "never"],
    "curly": ["error", "multi-or-nest"],
    "indent": ["error", 2],
    "no-debugger": "error",
    "prefer-const": "error",
    "no-bitwise": "error",
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": "off",
    "no-case-declarations": "off",
    "sort-imports": "error",
    "max-len": ["error", { "code": 80 }],
    //unused imports
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
  }
}