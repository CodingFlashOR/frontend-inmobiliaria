import React from 'react'
import InputComponent from './InputComponent'

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  name: string;
}

interface InputsProps {
  inputs: InputProps[];
  inputsInfo: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ inputs, inputsInfo, handleChange }) => {
  return (
    <>
      {inputs.map(input => (
        <InputComponent
          key={input.id}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          type={input.type}
          icon={input.icon}
          name={input.name}
          value={inputsInfo[input.name as keyof typeof inputsInfo]}
          onChange={handleChange}
        />
      ))}
    </>
  )
}

export default Inputs
