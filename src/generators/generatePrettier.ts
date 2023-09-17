export default function generatePrettier() {
  return `{
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": false,
    "printWidth": 120,
    "overrides": [
      {
        "files": ["*.json", "*.js", "*.jsx", "*.ts", "*.tsx"],
        "options": {
          "tabWidth": 2
        }
      }
    ],
    "arrowParens": "avoid"
  }`;
}
