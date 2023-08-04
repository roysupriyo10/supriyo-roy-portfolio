import { ApplicationState } from "@/types"
import { Hero } from "./hero"

export const Body = (props: ApplicationState) => {
  return (
    <div
      style={{
        flexGrow: 1,
        overflowY: "auto"
      }}
    >
      <div
        style={{
          // height: "1000px"
        }}
      >
        <Hero {...props} />
      </div>
    </div>
  )
}