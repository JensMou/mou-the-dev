module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#067BC2",
        white: "#FFFCFF",
        black: "#010001",
        danger: "#ED254E",
        warning: "#E3B23C",
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
      theme: {
        fontFamily: {
          sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
          serif: ["Roboto Slab", "ui-serif", "Georgia", "serif"],
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
