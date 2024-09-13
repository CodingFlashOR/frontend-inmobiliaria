import React from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg' // Ajusta la ruta según sea necesario

const Login: React.FC = () => {
  const loginInputs = [
    { id: 'email', label: 'Email', placeholder: 'arcortoon@gmail.com', type: 'email', name: 'email' },
    { id: 'password', label: 'Contraseña', placeholder: '********', type: 'password', name: 'password' }
  ]

  return (
    <div>
      <FormLogReg type='login' inputs={loginInputs} />
    </div>
  )
}

export default Login
