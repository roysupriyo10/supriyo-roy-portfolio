import LogoDark from '@/assets/logoDarkMode.png'
import LogoLight from '@/assets/logoLightMode.png'
import { applicationProps } from '@/types'



const Logo = ({ appState }: applicationProps) => {
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