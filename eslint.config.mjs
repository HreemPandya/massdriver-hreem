import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable react/no-unescaped-entities to prevent build errors
      "react/no-unescaped-entities": "off",

      // Optional: Ignore warnings about unused imports
      "@typescript-eslint/no-unused-vars": "warn",

      // Optional: Allow using <img> instead of next/image
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
