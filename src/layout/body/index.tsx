import { ApplicationState } from "@/types"
import { Hero } from "./hero"
import { Projects } from "./projects"

import './body.css'

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
        <Projects {...props} />
      </div>
    </div>
  )
}