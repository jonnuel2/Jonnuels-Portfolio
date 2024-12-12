/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"], // Add the font family
      },

      colors: {
        primary: "#252734", // Custom dark blue
        primary2: "#282A37", // Custom dark blue
        secondary: "#64748B", // Custom grayish blue
        accent: "#F43F5E", // Custom red/pink
        border: "#858792",
        "text-grey": "#858792",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },

      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Default padding for all screen sizes
          sm: "2rem", // Padding for small screens
          lg: "4rem", // Padding for large screens
          xl: "5rem", // Padding for extra-large screens
          "2xl": "6rem", // Padding for 2xl screens
        },
        screens: {
          sm: "640px", // Small screens
          md: "768px", // Medium screens
          lg: "1024px", // Large screens
          xl: "1280px", // Extra-large screens
          "2xl": "1536px", // 2xl screens
        },
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
