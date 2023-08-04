import { FlexBetweenRow } from '@/components'
import { ApplicationState } from '@/types'
import ToggleDark from './ToggleDark'
import { useMediaQuery } from '@/hooks'
import { HamburgerMenuIcon } from '@/components/hamburger-menu-icon/HamburgerMenuIcon'
import { colors } from '@/theme/colors'

type Props = ApplicationState

const Navigation = (props: Props) => {
  return (
    <>
      {
        useMediaQuery('sm')
        ?
        <FlexBetweenRow
          style={{
            width: "17rem"
          }}
        >
          <ToggleDark {...props} />
          <div>Works</div>
          <div>Home</div>
        </FlexBetweenRow>
        :
        <div
          style={{
            width: props.appState.isNavOpen ? "8.5rem" : "5rem"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {props.appState.isNavOpen && (<p style={{zIndex: '1'}}>Close</p>)}
            <HamburgerMenuIcon {...props} />
          </div>
          <div
            style={{
              display: props.appState.isNavOpen ? "flex" : "none",
              flexDirection: "column",
              justifyContent: "start",
              rowGap: "1rem",
              alignItems: "center",
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              backgroundColor: colors[props.appState.themeMode].secondary,
              width: "40%"
            }}
          >
            <ToggleDark {...props} />
            <div>Works</div>
            <div>Home</div>
          </div>
        </div>
      }
    </>
  )
}

export default Navigation