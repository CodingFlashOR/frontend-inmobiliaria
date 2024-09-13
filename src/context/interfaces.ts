interface MyToken {
  token_type: string;
  exp: number; // Tiempo de expiración en formato Unix (segundos desde 1970)
  iat: number;
  jti: string;
  user_uuid: string;
  user_role: string;
}

interface User {
  username: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, pass: string) => Promise<void>;
  updateTokens: () => Promise<void>;
  logout: () => Promise<void>;
}

export { MyToken, User, LoginResponse, AuthState }
