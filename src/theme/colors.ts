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
    secondary: "#fbf6f1",
    accent: "#7c4e29",
    text: "#111111"

  },
  dark: {
    main: "#181716",
    secondary: "#4a4a4a",
    accent: "#fbf6f1",
    text: "#cacaca"
  }
}