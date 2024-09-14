import React from 'react'
import FormLogReg from '../components/FormLogReg/FormLogReg' // Ajusta la ruta según sea necesario
import useAuthStore from '../context/authStore'

const Login: React.FC = () => {
  const [loginInfo, setLoginInfo] = React.useState({ email: '', password: '' })
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const loginInputs = [
    { id: 'email', label: 'Email', placeholder: 'arcortoon@gmail.com', type: 'email', name: 'email' },
    { id: 'password', label: 'Contraseña', placeholder: '********', type: 'password', name: 'password' }
  ]

  const { login, decodedToken } = useAuthStore()

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

    if (!email || !password) {
      setError('Todos los campos son obligatorios')
      setLoading(false)
      return
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,128}/.test(password)) {
      setError('La contraseña debe contener al menos una mayúscula, una minúscula y un carácter especial.')
      setLoading(false)
      return
    }

    const logging = await login(email, password)

    if (!logging) {
      setError('Email o contraseña incorrectos')
      setLoading(false)
    } else {
      decodedToken()
      setLoginInfo({ email: '', password: '' })
    }
  }

  return (
    <div>
      <FormLogReg type='login' inputs={loginInputs} handleChange={handleChange} handleSubmit={handleSubmit} inputsInfo={loginInfo} error={error} loading={loading} />
    </div>
  )
}

export default Login
