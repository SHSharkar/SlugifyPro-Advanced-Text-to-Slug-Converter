module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["JetBrains Mono", "sans-serif"],
          display: ["JetBrains Mono", "sans-serif"],
          body: ["JetBrains Mono", "sans-serif"]
        }
      }
    },
    plugins: [require("@tailwindcss/forms")]
  };
