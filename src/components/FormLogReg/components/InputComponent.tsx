import React from 'react'

// Define las propiedades para el componente Input
interface InputProps {
  input: {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    icon?: string;
    name: string;
  };
}

const InputComponent: React.FC<InputProps> = ({ input }) => {
  return (
    <div key={input.id} className='input-group'>
      <label>{input.label}</label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
      />
      {input.icon && <i className={input.icon} />}
    </div>
  )
}

export default InputComponent
