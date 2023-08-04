import { SetStateAction } from "react"

type ThemeMode = "light" | "dark"

export interface GlobalStateObject {
  themeMode: ThemeMode,
  
}

export type ApplicationState = {
  appState: GlobalStateObject,
  setAppState?: React.Dispatch<SetStateAction<GlobalStateObject>>
}