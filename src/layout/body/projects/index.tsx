import { Card } from "@/components"
import { colors } from "@/theme/colors"
import { ApplicationState } from "@/types"
import FinanceMasterImg from '@/assets/screens/finance-master.png'

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
        <img src={FinanceMasterImg} alt="" />
        <h3>Stack</h3>
        <ol
          style={{
            marginLeft: "1rem"
          }}
        >
          <li>React</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Recharts for Charting</li>
          <li>Render (back) and Vercel (front) for hosting</li>
        </ol>

        <div
          style={{
            display: 'flex',
            justifyContent: "end",
            gap: "1rem",
            marginTop: "1rem"
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              backgroundColor: colors[props.appState.themeMode].accent,
              border: "none",
              borderRadius: "8px"
            }}
          >
            <a href="https://github.com/roysupriyo10/finance-master-mern" style={{ color: colors[props.appState.themeMode === 'dark' ? 'light' : 'dark'].text, textDecoration: "none" }} target="_blank">
            GitHub Repo
            </a>
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              backgroundColor: colors[props.appState.themeMode].accent,
              border: "none",
              borderRadius: "8px"
            }}
          >
            <a href="" style={{ color: colors[props.appState.themeMode === 'dark' ? 'light' : 'dark'].text, textDecoration: "none" }} target="_blank">
              Live Demo
            </a>
          </button>
        </div>
      </Card>
    </div>
  )
}
