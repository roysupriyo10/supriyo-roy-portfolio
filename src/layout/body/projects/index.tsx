import { Card } from "@/components"
import { colors } from "@/theme/colors"
import { ApplicationState } from "@/types"

export const Projects = (props: ApplicationState) => {
  return (
    <div
      className="section projects"
    >
      <h2
        style={{
          color: colors[props.appState.themeMode].accent
        }}
      >Projects built by me</h2>
      <Card customColor={colors[props.appState.themeMode].secondary}>
        <h2>Finance Master</h2>
        <h4>A dashboard for monitoring all the key performance indicators of a company to keep track of its sustainability.</h4>
      </Card>
    </div>
  )
}