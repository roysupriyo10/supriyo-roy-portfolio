export const FlexBetweenRow = ({ children, style, className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
      }}
      className={className}
    >{children}</div>
  )
}