type Props = {
  children: JSX.Element[];
  style?: React.CSSProperties
}

export const FlexBetweenRow = ({ children, style }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
      }}
    >{children}</div>
  )
}