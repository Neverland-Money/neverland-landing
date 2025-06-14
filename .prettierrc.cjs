// prettierrc.cjs
module.exports = {
  semi: true, // add semicolons at end of statements
  singleQuote: true, // use single quotes
  trailingComma: 'all', // multi-line comma where valid in ES5 (objects, arrays, etc)
  bracketSpacing: true, // { foo: bar }
  arrowParens: 'always', // include parens: `(x) => x + 1`
  printWidth: 80, // wrap lines at 80 characters
  tabWidth: 2, // two-space indentation
  plugins: ['prettier-plugin-tailwindcss'],
  // if your tailwind.config.js lives elsewhere:
  // tailwindConfig: './config/tailwind.config.js',
};
