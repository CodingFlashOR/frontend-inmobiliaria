import React from 'react'
import Inputs from './components/Inputs'
import './FormLogReg.css'
import useAuthStore from '../../context/authStore'

interface Input {
  id: string; // Identificador único
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  name: string;
}

interface FormLogRegProps {
  type: 'login' | 'register';
  inputs: Input[];
}

const FormLogReg: React.FC<FormLogRegProps> = ({ type, inputs }) => {
  const { login } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const pass = e.currentTarget.password.value

    await login(email, pass)
  }

  return (
    <>
      <div className='header'>
        <img src='' alt='' />
        <h2>INMOBILIARIA</h2>
        <h3>¡Bienvenido!</h3>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <Inputs inputs={inputs} />
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
