import { SetStateAction } from "react"

type ThemeMode = "light" | "dark"

export interface GlobalStateObject {
  themeMode: ThemeMode,
  
}

export type applicationProps = {
  appState: GlobalStateObject,
  setAppState: React.Dispatch<SetStateAction<GlobalStateObject>>
}