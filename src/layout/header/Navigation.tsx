import { FlexBetweenRow } from '@/components'
import { applicationProps } from '@/types'

type Props = applicationProps

const Navigation = ({ appState, setAppState }: Props) => {
  return (
    <FlexBetweenRow
      style={{
        width: "10rem"
      }}
    >
      <input
        type="checkbox"
        name="theme-switch"
        checked={appState.themeMode === 'dark' ? true : false}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAppState(previousState => ({
            ...previousState,
            themeMode: e.target.checked === true ? 'dark' : 'light'
          }))
        }}
      />
      <div>Works</div>
      <div>Home</div>
    </FlexBetweenRow>    
  )
}

export default Navigation