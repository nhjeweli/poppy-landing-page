/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        hotPink: {
          10: "#d90166"
        },
        green: {
          50: "#30AF5B",
          90: "#292C27"
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414"
        },
        orange: {
          50: "#FF814C",
          60: "#fbb1b1"
        },
        blue: {
          70: "#021639"
        },
        yellow: {
          50: "#FEC601"
        }
      },
      backgroundImage: {
        "bg-img-1": "linear-gradient( 180deg, rgba(11, 29, 38, 0.8) 22%, rgba(11, 29, 38, 0.6) ), url('/hero-1.jpg')",
        "bg-img-2": "url('/img-2.png')",
        "bg-img-3": "url('/cta-img-1.jpg')",
        "bg-img-4": "linear-gradient(180deg, rgba(10, 9, 5, 0), #0a0905), url('/hero-bg-4.jpg')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')"
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "991px" },
        xl: { min: "1200px" }
      },
      maxWidth: {
        "10xl": "1512px"
      },
      borderRadius: {
        "5xl": "40px"
      },
      top: {
        "top-[37%]": "37%"
      },
      left: {
        left: "-12%"
      },
      keyframes: {
        scrollMove: {
          "0%": { from: "top: 0px" },
          "10%": { to: "top: 50px, opacity: 0" }
        }
      },
      animation: {
        "scroll-move": "scrollMove 2s infinite"
      },
      gridTemplateColumns: {
        "16": "(1fr, 1fr)"
      },
      boxShadow: {
        "3xl": "23px 23px 44px 0 #013e3d",
        "4xl": "0 9px 40px 0 rgba(0, 22, 79, 0.1);",
        "5xl": "21px 21px 50px 0 rgba(166, 167, 174, 0.45)"
      },
      backgroundPosition: {
        topleft: "100%, 50%"
      }
    }
  },
  plugins: [nextui()]
}
