import React from 'react'
import InputComponent from './InputComponent'
import { InputsProps } from './Interfaces'

/**
 * A component that renders a list of input components.
 * @param {InputsProps} props - The props for the Inputs component.
 * @returns {JSX.Element} A list of input components.
 */
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
          value={inputsInfo[input.name] || ''}
          onChange={handleChange}
          inputError={input.inputError}
        />
      ))}
    </>
  )
}

export default Inputs
