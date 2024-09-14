import React from 'react'

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputProps> = ({ id, label, placeholder, type, icon, name, value, onChange }) => {
  return (
    <div key={id} className='input-group'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {icon && <i className={icon} />}
    </div>
  )
}

export default InputComponent
