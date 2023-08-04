interface Props extends React.HTMLAttributes<HTMLDivElement> {
  customColor: string
}

export const Card = ({ style, customColor, children, ...rest }: Props) => {
  return (
    <div
      style={{
        ...style,
        margin: "2rem 0",
        backgroundColor: customColor,
        borderRadius: "4px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
      className="card"
      {...rest}
    >{children}</div>
  )
}