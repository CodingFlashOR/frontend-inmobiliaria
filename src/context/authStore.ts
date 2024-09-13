import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'
import { AuthState, LoginResponse, MyToken } from './interfaces'

const URL = import.meta.env.VITE_API_URL

const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,

  login: async (email: string, pass: string) => {
    const response = await fetch(`${URL}/api/v1/user/jwt/login/`, {
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

    if (!accessToken) {
      return
    }

    const decodedToken = jwtDecode<MyToken>(accessToken)

    const currentTime = Date.now() / 1000
    if (decodedToken.exp > currentTime) {
      return
    }

    const response = await fetch(`${URL}/api/v1/user/jwt/update/`, {
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

    if (typeof updateTokens === 'function') {
      await updateTokens()
    }

    await fetch(`${URL}/api/v1/user/jwt/logout/`, {
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
