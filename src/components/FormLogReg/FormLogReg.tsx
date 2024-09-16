import React from 'react'
import { Link } from 'react-router-dom'

import Inputs from '../Inputs/Inputs'
import { FormLogRegProps } from './interfaces'

import './FormLogReg.css'

/**
 * FormLogReg Component
 * A form component for login and registration purposes.
 * @param props - The props for the component.
 * @returns The rendered form component.
 */
const FormLogReg: React.FC<FormLogRegProps> = ({
  type,
  inputs,
  handleSubmit = () => { },
  handleChange = () => { },
  inputsInfo,
  error,
  loading
}) => {
  return (
    <>
      <div className='header'>
        <img src='' alt='' />
        <h2>INMOBILIARIA</h2>
        <h3>¡Bienvenido!</h3>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <Inputs inputs={inputs} inputsInfo={inputsInfo} handleChange={handleChange} />
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {type === 'login'
          ? (
            <div>
              <div>¿Olvidaste tu contraseña?</div>
            </div>
            )
          : (
            <div>
              <input type='checkbox' /> Acepto los términos y condiciones de uso
            </div>
            )}
        {type === 'login'
          ? (
            <button>Iniciar sesión</button>
            )
          : (
            <button>Registrarse</button>
            )}
      </form>

      <div>
        {type === 'login'
          ? (
            <p>
              ¿No tienes cuenta? <Link to='/register'>Regístrate</Link>
            </p>
            )
          : (
            <p>
              ¿Ya tienes cuenta? <Link to='/login'>Inicia sesión</Link>
            </p>
            )}
      </div>
    </>
  )
}

export default FormLogReg
