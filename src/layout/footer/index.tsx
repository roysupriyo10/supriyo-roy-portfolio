import { FlexBetweenRow } from "@/components"
import SocialMedia from "./SocialMedia"
import { ApplicationState } from "@/types"

export const Footer = (props: ApplicationState) => {
  return (
    <FlexBetweenRow
      style={{
        height: "6rem"
      }}
    >
      <h4>Approach Me!</h4>
      <SocialMedia {...props} />
    </FlexBetweenRow>
  )
}