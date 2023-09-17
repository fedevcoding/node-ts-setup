export default function generateUtils() {
  return `export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";`;
}
