/** @type {import("prettier").Config} */
export default {
  // Basic Formatting
  printWidth: 80,
  tabWidth: 2,
  useTabs: true,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",

  // JSX Specific
  jsxSingleQuote: false,
  bracketSameLine: false,

  // Modern Features
  trailingComma: "all",
  arrowParens: "always",

  // Enhanced Readability
  bracketSpacing: true,

  // Plugins
  plugins: ["prettier-plugin-tailwindcss"],

  // Tailwind CSS Class Sorting
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx", "cn"],
};
