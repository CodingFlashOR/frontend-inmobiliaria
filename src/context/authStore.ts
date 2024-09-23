import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { jwtDecode } from 'jwt-decode'
import { AuthState, LoginResponse, MyToken } from './interfaces'

const URL = import.meta.env.VITE_API_URL_AUTH
const URLReg = import.meta.env.VITE_API_URL_AUTH_REG

const useAuthStore = create<AuthState>()(devtools((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  user: null,
  userRole: null,
  userUuid: null,
  exp: null,
  emailError: null,
  passwordError: null,
  responseError: null,
  nameError: null,
  lastNameError: null,
  confirmPasswordError: null,

  start: async () => {
    const value = `; ${document.cookie}`
    const parts = value.split('; access_token=')
    if (parts.length === 2) {
      const token = parts.pop()?.split(';').shift()
      if (token) {
        set({ accessToken: token })
        get().decodedToken()
      }
    }
  },

  setCookies: (name: string, value: string, days: number) => {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${name}=${value};${expires};path=/;secure;samesite=Strict`
  },

  getCookies: (name: string) => {
    const { decodedToken } = get()

    if (!name) {
      console.warn('Cookie name must be provided')
      return null
    }

    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)

    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift()
      if (cookieValue) {
        set({ accessToken: cookieValue })
        decodedToken()
        return cookieValue
      } else {
        console.warn(`Cookie value for '${name}' is empty or invalid`)
        return null
      }
    }

    console.warn(`Cookie '${name}' does not exist`)
    return null
  },

  register: async (name: string, lastName: string, email: string, pass: string, pass2: string): Promise<boolean> => {
    if (pass !== pass2) {
      set({ confirmPasswordError: 'Las contraseñas no coinciden' })
    }
    if (name === '') {
      set({ nameError: 'Este campo es requerido' })
    }
    if (lastName === '') {
      set({ lastNameError: 'Este campo es requerido' })
    }
    if (email === '') {
      set({ emailError: 'Este campo es requerido' })
    }
    if (pass === '') {
      set({ passwordError: 'Este campo es requerido' })
    }
    if (pass2 === '') {
      set({ confirmPasswordError: 'Este campo es requerido' })
    }

    if (name === '' || lastName === '' || email === '' || pass === '' || pass2 === '') {
      return false
    }

    try {
      const response = await fetch(URLReg, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, last_name: lastName, email, password: pass, confirm_password: pass2 })
      })

      const text = await response.text()
      let data: LoginResponse | null = null

      try {
        data = text ? JSON.parse(text) : null
      } catch (error) {
        console.error('Error parsing JSON:', error)
      }

      if (response.ok) {
        set({
          emailError: null,
          passwordError: null,
          responseError: null,
          nameError: null,
          lastNameError: null,
          confirmPasswordError: null
        })
        return true
      } else {
        if (response.status === 400) {
          if (data?.detail && typeof data.detail === 'object') {
            if ('email' in data.detail && data.detail.email) {
              set({
                emailError: data.detail.email[0],
                responseError: null
              })
            }
            if ('password' in data.detail && data.detail.password) {
              set({
                passwordError: data.detail.password[0],
                responseError: null
              })
            }
            if ('name' in data.detail && data.detail.name) {
              set({
                nameError: data.detail.name[0],
                responseError: null
              })
            }
            if ('last_name' in data.detail && data.detail.last_name) {
              set({
                lastNameError: data.detail.last_name[0],
                responseError: null
              })
            }
            if ('confirm_password' in data.detail && data.detail.confirm_password) {
              set({
                confirmPasswordError: data.detail.confirm_password[0],
                responseError: null
              })
            }
          }
        } else {
          set({
            responseError: typeof data?.detail === 'string' ? data.detail : 'Error desconocido',
            emailError: null,
            passwordError: null
          })
        }
        return false
      }
    } catch (error) {
      console.error('Error during registration:', error)
      set({
        responseError: 'Ocurrió un error inesperado, intentelo de nuevo más tarde'
      })
      return false
    }
  },

  decodedToken: async () => {
    const { accessToken, updateTokens } = get()
    if (!accessToken) {
      return
    }

    const decodedToken = jwtDecode<MyToken>(accessToken)

    console.log(decodedToken.exp < Date.now() / 1000)

    if (decodedToken.exp < Date.now() / 1000) {
      console.log('Token expired, updating...')
      await updateTokens()
    }

    set({
      isAuthenticated: true,
      exp: decodedToken.exp,
      userRole: decodedToken.user_role,
      userUuid: decodedToken.user_uuid
    })
  },

  login: async (email: string, pass: string): Promise<boolean> => {
    const { decodedToken, setCookies } = get()

    if (email === '') {
      set({ emailError: 'Este campo es requerido' })
    }

    if (pass === '') {
      set({ passwordError: 'Este campo es requerido' })
    }

    if (email === '' || pass === '') {
      return false
    }

    if (email.includes('@') === false || email.includes('.') === false) {
      set({ emailError: 'El valor ingresado es inválido' })
      return false
    }

    try {
      const response = await fetch(`${URL}login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password: pass })
      })

      const data: LoginResponse = await response.json()

      if (response.ok) {
        decodedToken()
        setCookies('access_token', data.access_token, 1)
        set({
          accessToken: data.access_token,
          isAuthenticated: true,
          emailError: null,
          passwordError: null,
          responseError: null
        })
        return true
      } else {
        if (response.status === 400) {
          if (data.detail && typeof data.detail === 'object') {
            if ('email' in data.detail && data.detail.email) {
              set({
                emailError: data.detail.email[0],
                responseError: null
              })
            }
            if ('password' in data.detail && data.detail.password) {
              set({
                passwordError: data.detail.password[0],
                responseError: null
              })
            }
          }
        } else if (response.status === 401 || response.status === 403) {
          set({
            responseError: typeof data.detail === 'string' ? data.detail : 'Error desconocido',
            emailError: null,
            passwordError: null
          })
        } else {
          set({
            responseError: typeof data.detail === 'string' ? data.detail : 'Error desconocido',
            emailError: null,
            passwordError: null
          })
        }
        return false
      }
    } catch (error) {
      console.error('Error logging in:', error)
      set({
        isAuthenticated: false,
        user: null,
        accessToken: null,
        userRole: null,
        userUuid: null,
        exp: null,
        responseError: 'Ocurrío un error inesperado, intentelo de nuevo más tarde'
      })
      return false
    }
  },

  updateTokens: async () => {
    const { accessToken, setCookies } = get()

    if (!accessToken) {
      return
    }

    const response = await fetch(`${URL}update/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ access_token: accessToken })
    })

    const data = await response.json()

    if (response.ok) {
      setCookies('access_token', data.access_token, 1)
      set({ accessToken: data.access_token })
    }
  },

  logout: async () => {
    const { setCookies, getCookies, decodedToken } = get()

    try {
      const token = getCookies('access_token')
      if (!token) {
        console.error('Token no encontrado')
        return
      }

      set({ accessToken: token })

      decodedToken()

      console.log('Access Token antes del logout:', token)

      const response = await fetch(`${URL}logout/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({})
      })

      if (!response.ok) {
        throw new Error(`Logout fallido con estado: ${response.status}`)
      }

      set({
        isAuthenticated: false,
        user: null,
        accessToken: null,
        userRole: null,
        userUuid: null,
        exp: null
      })

      setCookies('access_token', '', -1)
    } catch (error) {
      console.error('Error durante el logout:', error)
    }
  }
}), { name: 'AuthStore' }))

export default useAuthStore
