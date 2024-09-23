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
  detail?: string | {
    email?: string[];
    password?: string[];
    name?: string[];
    last_name?: string[];
    confirm_password?: string[];
    [key: string]: string[] | string | undefined;
  };
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  start: () => void;
  login: (email: string, pass: string) => Promise<boolean>;
  updateTokens: () => Promise<void>;
  logout: () => Promise<void>;
  decodedToken: () => void;
  register: (name: string, lastName: string, email: string, pass: string, pass2: string) => Promise<boolean>;
  setCookies: (name: string, value: string, days: number) => void;
  getCookies: (name: string) => string | null;
  exp: number | null;
  userRole: string | null;
  userUuid: string | null;
  responseError: string | { [key: string]: string } | null;
  emailError: string | null;
  passwordError: string | null;
  nameError: string | null;
  lastNameError: string | null;
  confirmPasswordError: string | null;

}

export type { AuthState, LoginResponse, MyToken, User }
