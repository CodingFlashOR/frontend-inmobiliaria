import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { jwtDecode } from 'jwt-decode'
import { AuthState, LoginResponse, MyToken } from './interfaces'

const URL = import.meta.env.VITE_API_URL

const useAuthStore = create<AuthState>()(devtools((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  userRole: null,
  userUuid: null,
  exp: null,

  decodedToken: () => {
    const { accessToken } = get()
    if (!accessToken) {
      return
    }

    const decodedToken = jwtDecode<MyToken>(accessToken)
    set({
      isAuthenticated: true,
      exp: decodedToken.exp,
      userRole: decodedToken.user_role,
      userUuid: decodedToken.user_uuid
    })
  },

  login: async (email: string, pass: string): Promise<boolean> => {
    try {
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
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          user: data.user,
          isAuthenticated: true
        })
        return true
      } else {
        set({
          isAuthenticated: false,
          user: null,
          accessToken: null,
          refreshToken: null,
          userRole: null,
          userUuid: null,
          exp: null
        })
        return false
      }
    } catch (error) {
      console.error('Error logging in:', error)
      set({
        isAuthenticated: false,
        user: null,
        accessToken: null,
        refreshToken: null,
        userRole: null,
        userUuid: null,
        exp: null
      })
      return false
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
      set({
        isAuthenticated: false,
        user: null,
        accessToken: null,
        refreshToken: null,
        userRole: null,
        userUuid: null,
        exp: null
      })
    }
  },

  logout: async () => {
    const { refreshToken, updateTokens } = get()

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

    set({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      userRole: null,
      userUuid: null,
      exp: null
    })
  }
}), { name: 'AuthStore' })) // Nombre del store en DevTools

export default useAuthStore
