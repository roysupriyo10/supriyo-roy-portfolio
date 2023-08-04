interface Colors {
  main: string;
  secondary: string;
  accent: string;
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
  },
  dark: {
    main: "#383736",
    secondary: "#4a4a4a",
    accent: "#fbf6f1"
  }
}