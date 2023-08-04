import { FlexBetweenRow } from "@/components"
import { ApplicationState } from "@/types"
import Navigation from "./Navigation"
import Logo from "./Logo"

export const Header = (props: ApplicationState) => {
  return (
    <FlexBetweenRow
      style={{
        height: "5.5rem"
      }}
    >
      <Logo {...props} />
      <Navigation {...props} />
    </FlexBetweenRow>
  )
}