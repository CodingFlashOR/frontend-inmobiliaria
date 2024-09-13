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
}

const Inputs: React.FC<InputsProps> = ({ inputs }) => {
  return (
    <>
      {inputs.map((input) => (
        <InputComponent key={input.id} input={input} name={input.name} />
      ))}
    </>
  )
}

export default Inputs
