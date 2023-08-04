import { FlexBetweenRow } from '@/components'
import { ApplicationState } from '@/types'
import ToggleDark from './ToggleDark'

type Props = ApplicationState

const Navigation = (props: Props) => {
  return (
    <FlexBetweenRow
      style={{
        width: "10rem"
      }}
    >
      <ToggleDark {...props} />
      <div>Works</div>
      <div>Home</div>
    </FlexBetweenRow>    
  )
}

export default Navigation