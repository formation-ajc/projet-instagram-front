export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface UserRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserUpdate {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserUpdatePassword {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface UserAuth {
  email: string;
  password: string;
}