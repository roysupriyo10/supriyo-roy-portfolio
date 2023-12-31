import './toggleswitch.css'

export const ToggleSwitch = ({ name, checked, onChange }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className='switch'>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className='slider' />
    </label>
  )
}