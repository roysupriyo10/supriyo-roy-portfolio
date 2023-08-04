import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch'
import { ApplicationState } from '@/types'
import React from 'react'

const ToggleDark = ({ appState, setAppState }: ApplicationState) => {
  return (
    <div>
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
    </div>
  )
}

export default ToggleDark