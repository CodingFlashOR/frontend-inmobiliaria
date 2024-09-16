import React from 'react'
import { InputProps } from './Interfaces'

/**
 * A reusable input component with optional icon.
 * @param {InputProps} props - The props for the input component.
 * @returns {JSX.Element} The rendered input component.
 */
const InputComponent: React.FC<InputProps> = ({ id, label, placeholder, type, icon, name, value, onChange, inputError }) => {
  return (
    <div key={id} className='input-group'>
      {inputError && <p className='error'>{inputError}</p>}
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        aria-label={label}
        onChange={onChange}
      />
      {icon && <i className={icon} />}
    </div>
  )
}

export default InputComponent
