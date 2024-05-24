import React from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg' // Ajusta la ruta según sea necesario

const Register: React.FC = () => {
  const registerInputs = [
    { id: 'nameSurname', label: 'Nombre y Apellido', placeholder: 'Nacho Basilio', type: 'text' },
    { id: 'email', label: 'Email', placeholder: 'arcortoon@gmail.com', type: 'email' },
    { id: 'password', label: 'Contraseña', placeholder: '********', type: 'password' }
  ]

  return (
    <div>
      <FormLogReg type='register' inputs={registerInputs} />
    </div>
  )
}

export default Register
