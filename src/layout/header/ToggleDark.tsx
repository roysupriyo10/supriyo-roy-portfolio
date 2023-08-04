import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch'
import { ApplicationState } from '@/types'
import React from 'react'

import sunDark from '@/assets/sunDarkMode.png'
import sunLight from '@/assets/sunLightMode.png'
import moonLight from '@/assets/moonLightMode.png'
import moonDark from '@/assets/moonDarkMode.png'

const ToggleDark = ({ appState, setAppState }: ApplicationState) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        marginRight: "0.3rem",
        marginTop: "7rem"
      }}
    >
      <img
        style={{
          height: "2rem"
        }}
        src={appState.themeMode === 'light' ? sunLight : sunDark}
        alt="light-mode-indicator"
      />
      <ToggleSwitch
        name='theme-switcher'
        checked={appState.themeMode === 'dark' ? true : false}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (!setAppState) return
          setAppState(previousState => ({
            ...previousState,
            themeMode: e.target.checked === true ? 'dark' : 'light'
          }))
        }}
      />
      <img
        style={{
          height: "1.9rem"
        }}
        src={appState.themeMode === 'light' ? moonLight : moonDark}
        alt="light-mode-indicator"
      />
    </div>
  )
}

export default ToggleDark