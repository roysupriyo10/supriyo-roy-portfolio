import { FlexBetweenRow } from "@/components"
import { applicationProps } from "@/types"
import Navigation from "./Navigation"
import Logo from "./Logo"

type Props = applicationProps

export const Header = (props: Props) => {
  return (
    <FlexBetweenRow
      style={{
        height: "5.5rem"
      }}
    >
      <Logo />
      <Navigation {...props} />
    </FlexBetweenRow>
  )
}