module.exports = {
  darkMode: "class",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#067BC2",

        text: "#121212",
        background: "#fff",
        foreground: "#fff",

        textDark: "#DFDFDF",
        backgroundDark: "#000",
        foregroundDark: "#000",

        glass: "rgba(255, 255, 255, .5)",
        glassDark: "rgba(0, 0, 0, .5)",

        danger: "#ED254E",
        warning: "#E3B23C",
        golden: "#FFD700",
        lightgrey: "#cfcfcf",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      theme: {
        fontFamily: {
          sans: ["Commissioner", "ui-sans-serif", "system-ui", "sans-serif"],
          serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
          mono: ["ui-monospace", "SFMono-Regular"],
          display: ["Oswald"],
          body: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        },
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
