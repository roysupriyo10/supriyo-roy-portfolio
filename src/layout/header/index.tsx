import { FlexBetweenRow } from "@/components"
import { colors } from "@/theme/colors"
import { GlobalStateObject } from "@/types"
import { SetStateAction } from "react"
import Navigation from "./Navigation"

type Props = {
  appState: GlobalStateObject,
  setAppState: React.Dispatch<SetStateAction<GlobalStateObject>>
}

export const Header = (props: Props) => {

  const { appState } = props
  return (
    <FlexBetweenRow
      style={{
        position: "fixed",
        top: 0,
        height: "6rem"
      }}
    >
      <div>Logo</div>
      <Navigation {...props} />
    </FlexBetweenRow>
  )
}