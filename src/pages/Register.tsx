import React from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg' // Ajusta la ruta según sea necesario

const Register: React.FC = () => {
  const [registerInfo, setRegisterInfo] = React.useState({ nameSurname: '', email: '', password: '' })

  const registerInputs = [
    { id: 'name', label: 'Nombre', type: 'text', name: 'name' },
    { id: 'surname', label: 'Apellidos', type: 'text', name: 'surname' },
    { id: 'email', label: 'Correo', type: 'email', name: 'email' },
    { id: 'password', label: 'Contraseña', type: 'password', name: 'password' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Form submitted')
  }

  const error = ''
  const loading = false

  return (
    <div>
      <FormLogReg
        type='register'
        inputs={registerInputs}
        inputsInfo={registerInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
      />
    </div>
  )
}

export default Register
