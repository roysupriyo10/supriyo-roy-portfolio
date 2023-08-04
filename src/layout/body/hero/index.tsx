import { ApplicationState } from "@/types"
import './index.css'
import { useMediaQuery } from "@/hooks"

export const Hero = ({ appState }: ApplicationState) => {
  return (
    <div className="hero-title section">
      <h1
        style={{
          marginTop: useMediaQuery("sm") ? "4rem" : "1rem",
          backgroundImage: appState.themeMode === 'dark' ? "linear-gradient(37deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" : "linear-gradient(144deg, rgba(124,78,41,1) 16%, rgba(143,84,36,1) 43%, rgba(231,118,28,1) 91%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
          
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }}
      >I'm Supriyo Roy, a developer who loves to innovate.</h1>
      <div
        className="hero-content"
        style={{
          marginTop: "4rem",
          width: useMediaQuery("md") ? "80%" : "90%"
        }}
      >
        <p>I am a skilled developer who thoroughly enjoys constructing full stack websites. I have a strong knowledge of various technologies, particularly the MERN stack and NextJS, and I am proficient in working with newer frameworks.</p>
        <p>My passion lies in creating seamless user experiences by combining the power of both front-end and back-end development. With my expertise and experience, I am capable of tackling complex projects and deliver high-quality results.</p>
        <p>I am constantly staying up-to-date with the latest advancements in the field to ensure that I am able to provide the most innovative and efficient solutions to my clients.</p>
      </div>
    </div>
  )
}