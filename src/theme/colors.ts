interface Colors {
  main: string;
  secondary: string;
  accent: string;
  text: string
}

interface ColorSetting {
  light: Colors;
  dark: Colors;
}

export const colors: ColorSetting = {
  light: {
    main: "#fffcfa",
    secondary: "#ffe7d2",
    accent: "#7c4e29",
    text: "#111111"

  },
  dark: {
    main: "#181716",
    secondary: "#4a4a4a",
    accent: "#20adaf",
    text: "#cacaca"
  }
}