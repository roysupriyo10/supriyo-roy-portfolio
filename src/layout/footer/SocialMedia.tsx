import LinkedIn from '@/assets/icons/social/linkedIn.png'
import Facebook from '@/assets/icons/social/facebook.png'
import Twitter from '@/assets/icons/social/twitter.png'
import GitHubDark from '@/assets/icons/social/githubDark.png'
import GitHubLight from '@/assets/icons/social/githubLight.png'
import EmailDark from '@/assets/icons/social/emailDark.png'
import EmailLight from '@/assets/icons/social/emailLight.png'
import { ApplicationState } from '@/types'
import { colors } from '@/theme/colors'
import { useMediaQuery } from '@/hooks'

const SocialMedia = ({ appState }: ApplicationState) => {
  return (
    <>
      {
        useMediaQuery("md")
        ?
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "1rem"
          }}
        >
          <p>Email</p>
          <button
            onClick={() => {
    
            }}
            style={{
              textDecoration: "none",
              border: "none",
              padding: "1rem 2rem",
              background: colors[appState.themeMode].accent,
              color: appState.themeMode === 'dark' ? colors.light.text : '#ffffff',
              fontSize: "1rem"
            }}
          ><a style={{ textDecoration: "none", color: appState.themeMode === 'dark' ? colors.light.text : '#ffffff' }} href='mailto:roysupriyo10@gmail.com'>Send me an email</a></button>
          <p
            style={{
              marginLeft: "2rem"
            }}
          >Socials</p>
          <div>
            <a href="https://www.linkedin.com/in/supriyo-roy-23460869/" target="_blank">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.facebook.com/SharinganSup/" target="_blank">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://twitter.com/sharingansup" target="_blank">
              <img src={Twitter} alt="" />
            </a>
            <a href="https://www.github.com/roysupriyo10" target='_blank'>
              <img src={appState.themeMode === 'light' ? GitHubDark : GitHubLight} alt="" />
            </a>
          </div>
        </div>
        :
        <div>

          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <img onClick={() => {

            }} style={{height: "2rem", marginRight: "0.3rem"}} src={appState.themeMode === 'light' ? EmailDark : EmailLight} alt="" />
            <img onClick={() => {

            }} style={{height: "2rem"}} src={LinkedIn} alt="" />
            <img onClick={() => {

            }} style={{height: "2rem"}} src={Facebook} alt="" />
            <img onClick={() => {

            }} style={{height: "2rem"}} src={Twitter} alt="" />
            <img onClick={() => {

            }} style={{height: "2rem"}} src={appState.themeMode === 'light' ? GitHubDark : GitHubLight} alt="" />
          </div>
        </div>
      }
    </>
  )
}

export default SocialMedia