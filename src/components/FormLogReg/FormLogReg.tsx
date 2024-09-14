import React from 'react'
import Inputs from './components/Inputs'
import './FormLogReg.css'

interface Input {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  name: string;
}

interface FormLogRegProps {
  type: 'login' | 'register';
  inputs: Input[];
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  inputsInfo: { [key: string]: string };
  error?: string;
  loading?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormLogReg: React.FC<FormLogRegProps> = ({ type, inputs, handleSubmit, handleChange, inputsInfo, error, loading }) => {
  return (
    <>
      <div className='header'>
        <img src='' alt='' />
        <h2>INMOBILIARIA</h2>
        <h3>¡Bienvenido!</h3>
      </div>
      <form action='' {...type === 'login' ? { onSubmit: handleSubmit } : {}}>
        <Inputs inputs={inputs} inputsInfo={inputsInfo} handleChange={handleChange || (() => { })} />
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {type === 'login'
          ? (
            <div>
              <div>
                <input type='checkbox' />
                <p>Recordarme</p>
              </div>
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
              ¿No tienes cuenta? <span>Regístrate</span>
            </p>
            )
          : (
            <p>
              ¿Ya tienes cuenta? <span>Inicia sesión</span>
            </p>
            )}
      </div>
    </>
  )
}

export default FormLogReg
