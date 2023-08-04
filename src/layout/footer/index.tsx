import { FlexBetweenRow } from "@/components"
import SocialMedia from "./SocialMedia"
import { ApplicationState } from "@/types"
import { useMediaQuery } from "@/hooks"

export const Footer = (props: ApplicationState) => {
  return (
    <FlexBetweenRow
      style={{
        height: useMediaQuery("md") ? "9rem" : "6rem"
      }}
    >
      <h4>Approach Me!</h4>
      <SocialMedia {...props} />
    </FlexBetweenRow>
  )
}