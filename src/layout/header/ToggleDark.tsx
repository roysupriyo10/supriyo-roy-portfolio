import { ToggleSwitch } from '@/components'
import { ApplicationState } from '@/types'
import React from 'react'

import sunDark from '@/assets/icons/dark-light-toggle/sunDarkMode.png'
import sunLight from '@/assets/icons/dark-light-toggle/sunLightMode.png'
import moonLight from '@/assets/icons/dark-light-toggle/moonLightMode.png'
import moonDark from '@/assets/icons/dark-light-toggle/moonDarkMode.png'
import { useMediaQuery } from '@/hooks'

const ToggleDark = ({ appState, setAppState }: ApplicationState) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        marginRight: "0.3rem",
        marginTop: !useMediaQuery("sm") ? "7rem" : "0"
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