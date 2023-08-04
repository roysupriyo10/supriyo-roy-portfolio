import { useState } from "react"
import { Body, Footer, Header } from "./layout"

import { GlobalStateObject } from "./types"
import { colors } from "./theme/colors"

function App() {

  const [ appState, setAppState ] = useState<GlobalStateObject>({
    themeMode: "dark",
    isNavOpen: false
  })

  return (
    <div
      className="app"
      style={{
        backgroundColor: `${colors[appState.themeMode].main}`,
        color: `${colors[appState.themeMode].text}`,
        height: "100%"
      }}
    >
      <div
        className="container-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: "100%"
        }}
      >
        <Header appState={appState} setAppState={setAppState} />
        <Body appState={appState} />
        <Footer appState={appState} />
      </div>
    </div>
  )
}

export default App
