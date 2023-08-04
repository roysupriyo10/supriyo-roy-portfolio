import { ApplicationState } from '@/types'
import './hamburgermenuicon.css'
import { colors } from '@/theme/colors'

export const HamburgerMenuIcon = ({ appState, setAppState }: ApplicationState) => {
  return (
    <div>
      <div
        style={{
          zIndex: '1'
        }}
        id="nav-icon2"
        className={`${appState.isNavOpen ? 'open' : ''}`}
        onClick={() => {
          if (!setAppState) return
          setAppState(previousState => ({
            ...previousState,
            isNavOpen: !previousState.isNavOpen
          }))
        }}
      >
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
        <span
          style={{
            background: colors[appState.themeMode].accent
          }}
        ></span>
      </div>
    </div>
  )
}