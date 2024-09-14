interface MyToken {
  token_type: string;
  exp: number;
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
  login: (email: string, pass: string) => Promise<boolean>;
  updateTokens: () => Promise<void>;
  logout: () => Promise<void>;
  decodedToken: () => void;
  exp: number | null;
  userRole: string | null;
  userUuid: string | null;
}

export type { MyToken, User, LoginResponse, AuthState }
