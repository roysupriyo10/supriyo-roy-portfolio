import { colors } from "@/theme/colors"
import { GlobalStateObject } from "@/types"
import { SetStateAction } from "react"

type Props = {
  appState: GlobalStateObject,
  setAppState: React.Dispatch<SetStateAction<GlobalStateObject>>
}

export const Footer = ({ appState, setAppState }: Props) => {
  return (
    <div
      style={{
        backgroundColor: `${colors[appState.themeMode].main}`
      }}
    >
      <button
        onClick={() => setAppState(
          previousState => ({
            ...previousState,
            themeMode: previousState.themeMode === 'dark' ? 'light' : 'dark'
          })
        )}
      >Change Theme</button>
    </div>
  )
}