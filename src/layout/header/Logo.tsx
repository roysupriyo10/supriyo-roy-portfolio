import LogoDark from '@/assets/logoDarkMode.png'
import LogoLight from '@/assets/logoLightMode.png'
import { ApplicationState } from '@/types'



const Logo = ({ appState }: ApplicationState) => {
  return (
    <img
      style={{
        height: "3em",
      }}
      src={appState.themeMode === "dark" ? LogoDark : LogoLight}
      alt="website-logo"
    />
  )
}

export default Logo