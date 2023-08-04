import { FlexBetweenRow } from "@/components"
import { ApplicationState } from "@/types"
import Navigation from "./Navigation"
import Logo from "./Logo"
import { useMediaQuery } from "@/hooks"

export const Header = (props: ApplicationState) => {
  return (
    <FlexBetweenRow
      style={{
        height: useMediaQuery("lg") ? "10rem" : "6rem"
      }}
    >
      <Logo {...props} />
      <Navigation {...props} />
    </FlexBetweenRow>
  )
}