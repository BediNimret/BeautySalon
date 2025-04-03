import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    fontFamily: {
      custom: ["Tangerine", "cursive"],
    },
    extend: {
      screens: {
        lg: "1100px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
});
