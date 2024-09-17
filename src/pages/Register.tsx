import React, { useState } from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg' // Ajusta la ruta según sea necesario
import useAuthStore from '../context/authStore'

const Register: React.FC = () => {
  const {
    register,
    nameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    responseError
  } = useAuthStore()
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const registerInputs = [
    { id: 'name', label: 'Nombre', type: 'text', name: 'name', inputError: nameError },
    { id: 'surname', label: 'Apellido', type: 'text', name: 'surname', inputError: lastNameError },
    { id: 'email', label: 'Correo', type: 'email', name: 'email', inputError: emailError },
    { id: 'password', label: 'Contraseña', type: 'password', name: 'password', inputError: passwordError },
    { id: 'password2', label: 'Repetir contraseña', type: 'password', name: 'password2', inputError: confirmPasswordError }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const { name, surname, email, password, password2 } = registerInfo

    const resp = await register(name, surname, email, password, password2)
    if (resp) {
      setError('')
      setLoading(false)
    } else {
      if (typeof responseError === 'string') {
        setError(responseError)
      }
      setLoading(false)
    }
    setLoading(false)
  }

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
