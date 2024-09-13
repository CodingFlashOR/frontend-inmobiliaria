import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'
import { AuthState, LoginResponse, MyToken } from './interfaces'

const URL = 'https://carlosandresaguirreariza.pythonanywhere.com'

const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,

  login: async (email: string, pass: string) => {
    const response = await fetch(`${URL}/api/v1/user/jwt/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password: pass })
    })

    const data: LoginResponse = await response.json()

    if (response.ok) {
      set({
        isAuthenticated: true,
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        user: data.user
      })
    } else {
      set({ isAuthenticated: false, user: null, accessToken: null, refreshToken: null })
    }
  },

  updateTokens: async () => {
    const { refreshToken, accessToken } = get()

    // Verifica si `access_token` existe antes de decodificarlo
    if (!accessToken) {
      return
    }

    // Decodifica el token

    const decodedToken = jwtDecode<MyToken>(accessToken)

    // Verifica si el token ha expirado
    const currentTime = Date.now() / 1000 // Tiempo actual en segundos
    if (decodedToken.exp > currentTime) {
      // Si el token no ha expirado, no actualizamos los tokens
      return
    }

    // Si el token ha expirado, solicita nuevos tokens
    const response = await fetch(`${URL}/api/v1/user/jwt/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ access_token: accessToken, refresh_token: refreshToken })
    })

    const data: { access_token: string; refresh_token: string } = await response.json()

    if (response.ok) {
      set({ accessToken: data.access_token, refreshToken: data.refresh_token })
    } else {
      set({ isAuthenticated: false, user: null, accessToken: null, refreshToken: null })
    }
  },

  logout: async () => {
    const state = get()
    const { refreshToken, updateTokens } = state

    // Asegúrate de que `updateTokens` es una función
    if (typeof updateTokens === 'function') {
      await updateTokens()
    }

    await fetch(`${URL}/api/v1/user/jwt/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken })
    })

    set({ isAuthenticated: false, user: null, accessToken: null, refreshToken: null })
  }
}))

export default useAuthStore
