import React from 'react'

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  name: string;
}

interface InputComponentProps {
  input: InputProps;
  name: string; // Añade name aquí
}

const InputComponent: React.FC<InputComponentProps> = ({ input, name }) => {
  return (
    <div key={input.id} className='input-group'>
      <label>{input.label}</label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        name={name} // Usa name aquí
      />
      {input.icon && <i className={input.icon} />}
    </div>
  )
}

export default InputComponent
