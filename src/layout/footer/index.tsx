import { FlexBetweenRow } from "@/components"
import { colors } from "@/theme/colors"
import { applicationProps } from "@/types"
import SocialMedia from "./SocialMedia"

type Props = applicationProps

export const Footer = ({ appState }: Props) => {
  return (
    <FlexBetweenRow
      style={{
        position: "fixed",
        width: "100%",
        height: "60px",
        bottom: 0,
        backgroundColor: `${colors[appState.themeMode].main}`
      }}
    >
      <h4>Approach Me!</h4>
      <SocialMedia />
    </FlexBetweenRow>
  )
}