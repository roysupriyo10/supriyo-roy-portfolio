import './toggleswitch.css'

const ToggleSwitch = ({ name, checked, onChange }: React.InputHTMLAttributes<HTMLInputElement>) => {
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

export default ToggleSwitch