/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{ts,tsx}",
    // "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
