import React, { useState, useEffect } from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg'
import useAuthStore from '../context/authStore'

interface PropsInput {
  id: string;
  label: string;
  type: string;
  icon?: string;
  name: string;
  inputError?: string | null; // Asegúrate de incluir inputError aquí
}

const Login: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login, responseError, emailError, passwordError } = useAuthStore()

  const loginInputs: PropsInput[] = [
    { id: 'email', label: 'Correo', type: 'email', name: 'email', inputError: emailError },
    { id: 'password', label: 'Contraseña', type: 'password', name: 'password', inputError: passwordError }
  ]

  useEffect(() => {
    if (responseError && typeof responseError === 'string') {
      setError(responseError)
    }
  }, [responseError])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const { email, password } = loginInfo

    const logging = await login(email, password)

    if (!logging) {
      setLoading(false)
    } else {
      setLoginInfo({ email: '', password: '' })
      setError('')
      setLoading(false)
    }
  }

  return (
    <div>
      <FormLogReg type='login' inputs={loginInputs} handleChange={handleChange} handleSubmit={handleSubmit} inputsInfo={loginInfo} error={error} loading={loading} />
    </div>
  )
}

export default Login
