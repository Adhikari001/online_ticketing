/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },
      gridTemplateColumns: {
        "20-1fr": "15rem 1fr",
        "person-table": "0.1fr 0.1fr 1.1fr 1.1fr 0.8fr 1.1fr 1.1fr",
      },
    },
  },
  plugins: [],
};
