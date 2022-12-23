module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  htmlWhitespaceSensitivity: 'strict',
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [require('prettier-plugin-organize-imports')],
};
