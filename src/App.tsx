import { useState } from "react"
import { Body, Footer, Header } from "./layout"

import { GlobalStateObject } from "./types"
import { colors } from "./theme/colors"

function App() {

  const [ appState, setAppState ] = useState<GlobalStateObject>({
    themeMode: "dark"
  })

  return (
    <div
      className="app"
      style={{
        backgroundColor: `${colors[appState.themeMode].main}`,
        color: `${colors[appState.themeMode].text}`,     
      }}
    >
      <div
        className="container-wrapper"
      >
        <Header appState={appState} setAppState={setAppState} />
        <Body />
        <Footer appState={appState} setAppState={setAppState} />
      </div>
    </div>
  )
}

export default App
